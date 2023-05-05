/**
 * @jest-8environment ./src/test/my-custom-environment
 */
import { loginLogic } from "../src/lib/loginLogic.js";

describe("loginLogic", () => {
    test("should be a function", () => {
        expect(typeof loginLogic).toBe("function");
    });
    test("after click the user navigates to home", () => {
        const domManipulation  = container.querySelector("loginBtn")
    });
});
