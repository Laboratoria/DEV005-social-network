/* import * as from"../src/firebase/configuracion.js"; */
import { registerLogic } from "../src/lib/registerLogic.js";

describe("registerLogic", () => {
    test("should be a function", () => {
        expect(typeof registerLogic).toBe("function");
    });
});

// test mensaje error boton registro en registro//
describe("showError", () => {
    test("function log message error ", () => {
        const mock = jest.fn();
        message.value = "";
        element.value = " ";
        expect(typeof message).toBeTruthy();
        expect(typeof element).toBeTruthy();
    });
});

// Validación de formulario de registro//
describe("validateFields", () => {
    test("registration validation", () => {
        expect(typeof validateFields).toBe("function");
    });
});
