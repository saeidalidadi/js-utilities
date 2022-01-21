import { combineURLs, fetchJsonRes, objectsDiff } from "../src";
import fetchMock from "jest-fetch-mock";

describe("Strings", () => {
    describe('combineURLs', () => {
        test('should return valid URL if the path starts with double slashes', () => {
            const result = combineURLs("http://test.pass", "//this/test")

            expect(result).toEqual("http://test.pass/this/test");
        });

        test('should return valid URL if there are not any slashes', () => {
            const result = combineURLs("http://test.pass", "this/test")

            expect(result).toEqual("http://test.pass/this/test");
        });

        test('should return valid URL if there are slashes at the end and at the start of url parts', () => {
            const result = combineURLs("http://test.pass/", "/this/test")

            expect(result).toEqual("http://test.pass/this/test");
        });
    });
})

describe('Objects & Arrays', () => {
    test('Should return changed props of the base object', () => {
        const base = {
            price: 99.9,
            type: "product"
        }

        const changed = {
            price: 99.9,
            type: "orders"
        }

        const result = objectsDiff(changed, base)

        expect(result).toMatchObject({ type: "orders" })
    });
});


describe('Parsers', () => {
    test('Should return JSON if the response is in JSON format.', async () => {
        const data = { naem: "John" }
        fetchMock.mockResponseOnce(JSON.stringify(data))

        const result = await fetch("/api")
        const jsonObject = await fetchJsonRes(result)
        expect(jsonObject).toMatchObject(data)
    });

    test('Should throw Error if the response is a text.', async () => {
        fetchMock.mockResponseOnce("ok")

        const res = await fetch("/api")
        await expect(async () => await fetchJsonRes(res)).rejects.toThrow(Error)

    });
});