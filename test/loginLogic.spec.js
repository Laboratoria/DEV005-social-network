/**
 * @jest-8environment ./src/test/my-custom-environment
 */
import { loginLogic } from "../src/lib/loginLogic.js";
import { login } from "../src/pages/login.js";
// import { auth } from "../src/firebase/configuracion.js";

describe("loginLogic", () => {
    test("should be a function", () => {
        expect(typeof loginLogic).toBe("function");
    });

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

    describe("validateFields", () => {
        test("should be a function with posibilities to show error", () => {
            const mailUserLogin = { value: "" };
            const passwordUserLogin = { value: "123" };
            const result = validateFields(mailUserLogin, passwordUserLogin);
            expect(result.error).toBe(true);
        });
    });

    /* describe("sign in with email", () => {
        test("click to validate validate fields", () => {
            jest
                .spyOn(auth, "signIn")
                .mockImplementation(() => Promise.resolve({ email: "test@test.com", password: "123" }));
            const findRouteAndNavigate = jest.fn();
            const DOM = login(findRouteAndNavigate);
            const mailUser = DOM.querySelector("#mailUserLogin");
            mailUser.value = "test@test.com";
            const passwordUserLogin = DOM.querySelector("#passwordUserLogin");
            passwordUserLogin.value = "123";
            const button = DOM.querySelector("#loginBtn");
            button.click();
            expect(auth.signIn).tohaveBeenCalled();

        }); */
});
