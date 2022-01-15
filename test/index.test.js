"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
describe("Strings", function () {
    describe('combineURLs', function () {
        test('should return valid URL if the path starts with double slashes', function () {
            var result = (0, src_1.combineURLs)("http://test.pass", "//this/test");
            expect(result).toEqual("http://test.pass/this/test");
        });
        test('should return valid URL if there are not any slashes', function () {
            var result = (0, src_1.combineURLs)("http://test.pass", "this/test");
            expect(result).toEqual("http://test.pass/this/test");
        });
    });
});
//# sourceMappingURL=index.test.js.map