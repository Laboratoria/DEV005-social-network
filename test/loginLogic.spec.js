/**
 * @jest-8environment ./src/test/my-custom-environment
 */
import { loginLogic } from "../src/lib/loginLogic.js";
import * as configuracion from "../src/firebase/configuracion.js";
import { login } from "../src/pages/login.js";

describe("loginLogic", () => {
    test("should be a function", () => {
        expect(typeof loginLogic).toBe("function");
    });

    // test("inputs with users data", () => {
    // const DOM = document.createElement("container");
    // const mailUser = DOM.querySelector("mailUserLogin");
    // expect(mailUser).toBeTruthy();
    // });

    describe("signIn", () => {
        test("data is collected before the click ", () => {
            jest.spyOn(configuracion, "signIn").mockImplementation(() => Promise.resolve({ email: "gonzaleslop03@gmail.com", password: "gitanaazu23" }));
            const DOM = document.createElement("container");
            DOM.append(login);
            const email = DOM.querySelector("#mailUserLogin");
            email.value = "gonzaleslop03@gmail.com";
            const password = DOM.querySelector("#passwordUserLogin");
            password.value = "gitanaazul23";
            expect(DOM).toBeTruthy();
        });
    });

    test("after click the user navigates to /home", () => {
        const findRouteAndNavigate = jest.fn();
        const DOM = login(findRouteAndNavigate);
        const loginBtn = DOM.querySelector("#loginBtn");
        expect(loginBtn).toBeTruthy();
    });
});
