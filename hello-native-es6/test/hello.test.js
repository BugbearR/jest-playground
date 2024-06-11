import hello from "../hello";

describe("hello", () => {
    test("should return hello message", () => {
        expect(hello("ES6")).toBe("Hello, ES6!");
    });
});
