import {
    combineURLs,
    delay,
    fetchJsonRes,
    objectsDiff,
    range,
    rangeLetters,
    withUnderscore,
    toSnakeCase,
    concatURLs,
    withQueries,
} from "../src";
import fetchMock from "jest-fetch-mock";

describe("Strings", () => {
    describe("combineURLs", () => {
        test("should return valid URL if the path starts with double slashes", () => {
            const result = combineURLs("http://test.pass", "//this/test");

            expect(result).toEqual("http://test.pass/this/test");
        });

        test("should return valid URL if there are not any slashes", () => {
            const result = combineURLs("http://test.pass", "this/test");

            expect(result).toEqual("http://test.pass/this/test");
        });

        test("should return valid URL if there are slashes at the end and at the start of url parts", () => {
            const result = combineURLs("http://test.pass/", "/this/test");

            expect(result).toEqual("http://test.pass/this/test");
        });
    });

    // This method is an alias for combineURLs
    // also will support www url addresses with protocols
    describe("concatURLs", () => {
        test("Should concat two parts when second part starts with slash", () => {
            const partOne = "http://one.me/";
            const partTwo = "/two/me";
            const result = concatURLs(partOne, partTwo);
            expect(result).toBe("http://one.me/two/me");
        });
    });
    describe("Queries", () => {
        test("Should append query strings to end of URL path", () => {
            let result = withQueries("/this-is-my-path", "name=John");
            expect(result).toEqual("/this-is-my-path?name=John");
        });

        test("Should append query strings to end of URL that already has some query strings", () => {
            let result = withQueries("/someone?name=John", "age=24");
            expect(result).toEqual("/someone?name=John&age=24");
        });

        test("Should append query strings from an object", () => {
            let result = withQueries("/someone", { age: 33, name: "John" });
            expect(result).toEqual("/someone?age=33&name=John");
        });
    });
    describe("Namings", () => {
        test("Should split string with `_`.", () => {
            let result = withUnderscore("onstage-js-utils");

            expect(result.split("_")).toHaveLength(3);

            result = withUnderscore("onstage.js.utils");

            expect(result.split("_")).toHaveLength(3);
        });

        test("Should convert camelCase strings to snake_case", () => {
            const camelCase = "goIntoHole";
            const snake_case = toSnakeCase(camelCase);
            expect(snake_case).toEqual("go_into_hole");
        });
    });
});

describe("Objects & Arrays", () => {
    test("Should return changed props of the base object", () => {
        const base = {
            price: 99.9,
            type: "product",
        };

        const changed = {
            price: 99.9,
            type: "orders",
        };

        const result = objectsDiff(changed, base);

        expect(result).toMatchObject({ type: "orders" });
    });
});

describe("Parsers", () => {
    test("Should return JSON if the response is in JSON format.", async () => {
        const data = { naem: "John" };
        fetchMock.mockResponseOnce(JSON.stringify(data));

        const result = await fetch("/api");
        const jsonObject = await fetchJsonRes(result);
        expect(jsonObject).toMatchObject(data);
    });

    test("Should throw Error if the response is a text.", async () => {
        fetchMock.mockResponseOnce("ok");

        const res = await fetch("/api");
        await expect(async () => await fetchJsonRes(res)).rejects.toThrow(Error);
    });
});

describe("Timers & Delay", () => {
    describe("Delay", () => {
        test("should delay procedure for 1 second", async () => {
            jest.spyOn(global, "setTimeout");
            await delay(1000);
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
        });
    });
});

describe("Ranges", () => {
    it("Should return an array of numbers between two numbers including start point", () => {
        const numbers = range(1, 5);
        expect(numbers).toEqual([1, 2, 3, 4]);
    });

    it("Should return characters between tow letters", () => {
        const letters = rangeLetters("a", "d");
        expect(letters).toEqual(["a", "b", "c", "d"]);
    });
});
