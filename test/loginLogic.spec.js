import { loginLogic } from "../src/lib/loginLogic.js";

describe("loginLogic", () => {
    it("should be a function", () => {
        expect(typeof loginLogic).toBe("function");
    });
});

describe("showError", () => {
    it("debería ser una función", () => {
        expect(typeof showError).toBe("function");
    });
});

describe("validateFields", () => {
    it("debería ser una función", () => {
        expect(typeof validateFields).toBe("function");
    });
});
