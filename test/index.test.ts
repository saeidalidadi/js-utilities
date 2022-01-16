import { combineURLs, objectsDiff } from "../src";

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