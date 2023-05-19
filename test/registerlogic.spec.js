/**
 * @jest-environment jsdom
 */
/* import { registerLogic } from "../src/lib/registerLogic";
import { registerUser } from "../src/firebase/configuration";

describe("registerLogic", () => {
    test("Es una funcion", () => {
        expect(typeof registerLogic).toBe("function");
    });
    test("Deberia poder ingresar", () => {
        jest.spyOn("registerUser").mockImplementation(() => Promise.resolve({ email: "example@gmail.com" }));
        const DOM = document.createElement("div");
        // eslint-disable-next-line no-undef
        DOM.append((registerUser));
        const email = DOM.querySelector("#userMailRegister");
        const password = DOM.querySelector("#userPasswordRegister");
        email.value = "carolrobleseduc@gmail.com";
        password.value = "123456";
        const buttonRegister = DOM.querySelector("#userNameRegister");
        buttonRegister.submit();
        // eslint-disable-next-line no-undef
        expect(registerUser).toHaveBeenCalledTimes();
        expect(registerUser).toHaveBeenLastCalledWith("carolrobleseduc@gmail.com");
        expect(registerUser).toHaveBeenLastCalledWith("123456");
        setTimeout((done) => {
            const findRouteAndNavigate = jest.fn();
            // eslint-disable-next-line no-undef
            DOM.append(registerLogic(findRouteAndNavigate));
            expect(findRouteAndNavigate).toHaveBeenLastCalledWith("/login");
            done();
        }, 0);
    });
    test("deberia llamar a  /login ", () => {
        const DOM = document.createElement("div");
        const registerBtn = jest.fn();
        // eslint-disable-next-line no-undef
        DOM.append((registerBtn));
        const register = DOM.querySelector("#loginBtn");
        register.click();
        expect(registerBtn).toHaveBeenLastCalledWith("#loginBtn");
    });
}); */
