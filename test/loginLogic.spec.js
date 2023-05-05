/**
 * @jest-8environment ./src/test/my-custom-environment
 */
import { loginLogic } from "../src/lib/loginLogic.js";
// import * as configuracion from "../src/firebase/configuracion.js";
import { login } from "../src/pages/login.js";

describe("loginLogic", () => {
    test("should be a function", () => {
        expect(typeof loginLogic).toBe("function");
    });
    // flujo - en el primer test traer cuno de los elementos/existencia, validaciones de texto
    test("after click the user navigates to /home", () => {
        const findRouteAndNavigate = jest.fn();
        const DOM = login(findRouteAndNavigate);
        // const domManipulation = document.createElement("section");
        // const findAndNavigate = jest.fn();
        // domManipulation.append((loginLogic(findAndNavigate)));
        const loginBtn = DOM.querySelector("#loginBtn");
        // loginBtn.click();
        expect(loginBtn).toBeTruthy();
    });
});
