const hello = require("../hello");

describe("hello", () => {
    test("should return hello message", () => {
        expect(hello("CommonJS")).toBe("Hello, CommonJS!");
    });
});
