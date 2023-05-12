/**
 * @jest-8environment ./src/test/my-custom-environment
 */
import { loginLogic } from "../src/lib/loginLogic.js";
import { login } from "../src/pages/login.js";
// import { auth, signIn, signIn } from "../src/firebase/configuracion.js";

describe("loginLogic", () => {
    test("should be a function", () => {
        expect(typeof loginLogic).toBe("function");
    });

    // test("inputs with users data", () => {
    // const DOM = document.createElement("container");
    // const mailUser = DOM.querySelector("mailUserLogin");
    // expect(mailUser).toBeTruthy();
    // });

    describe("after click the user navigates to /home", () => {
        test("should be a function", () => {
            const findRouteAndNavigate = jest.fn();
            const DOM = login(findRouteAndNavigate);
            const loginBtn = DOM.querySelector("#loginBtn");
            expect(loginBtn).toBeTruthy();
        });
    });

    describe("click to auth with google", () => {
        test("have a sign in with google buttom", () => {
            const findRouteAndNavigate = jest.fn();
            const DOM = login(findRouteAndNavigate);
            const withGoogle = DOM.querySelector("#loginGmailBtn");
            expect(withGoogle).toBeTruthy();
        });
    });

/* describe("sign in with email", () => {
        test("click to validate count or not", () => {
            jest.spyOn(auth, "signIn").mockImplementation(() => Promise.resolve({ email: "test@test.com", password: "123" }));
            const findRouteAndNavigate = jest.fn();
            const DOM = login(findRouteAndNavigate);
            const mailUser = DOM.querySelector("#mailUserLogin");
            mailUser.value = "test@test.com";
            const passwordUserLogin = DOM.querySelector("#passwordUserLogin");
            passwordUserLogin.value = "123";
            const button = DOM.querySelector("#loginBtn");
            button.click();
            expect(signIn).tohaveBeenCalled(1);
            // const validateFieldsMock = jest.fn();
            // login.append(validateFieldsMock);
            // jest.spyOn(auth, "validateFieldsMock");
        });
    });
});
