import { combineURLs } from "../src";

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
    });
})