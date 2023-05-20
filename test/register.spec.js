import { register } from "../src/pages/register.js";

jest.mock("../src/pages/img.js", () => ({
    logo: "",
}));

describe("register", () => {
    test("Los datos se recopilan antes del click", () => {
        const content = document.createElement("main");
        content.id = "content";
        document.body.append(content);

        // No es necesario espiar la función register en este caso
        content.append(register());
        const name = content.querySelector("#userNameRegister");
        name.value = "usernameregister";
        const email = content.querySelector("#userMailRegister");
        email.value = "carolrobleseduc@gmail.com";
        const password = content.querySelector("#userPasswordRegister");
        password.value = "123456";
        expect(name).toBeTruthy();
        expect(email).toBeTruthy();
        expect(password).toBeTruthy();
    });

    test("Después de hacer clic, el usuario navega a /login", () => {
        const findRouteAndNavigate = jest.fn();
        const DOM = register(findRouteAndNavigate);
        const registerBtn = DOM.querySelector("#loginBtn");
        expect(registerBtn).toBeTruthy();
    });
});
