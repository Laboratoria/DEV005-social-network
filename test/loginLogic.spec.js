/**
 * @jest-8environment ./src/test/my-custom-environment
 */
import { loginLogic } from "../src/lib/loginLogic.js";

describe("loginLogic", () => {
    test("debería ser una función", () => {
        expect(typeof loginLogic).toBe("function");
    });
    test("have inputs and bottons", () => {
        const domManipulation = container.querySelector()
    });
});
