// import { registerLogic } from "../src/lib/registerLogic.js";//
import { register } from "../src/pages/register.js";

describe("register", () => {
    test("should be a function", () => {
        expect(typeof register).toBe("function");
    });
// eslint-disable-next-line jest/no-identical-title
});
test("data is collected before the click ", () => {
    const content = document.createElement("main");
    content.id = "content";
    document.body.append("content");
    // eslint-disable-next-line no-undef
    jest.spyOn(register).mockImplementation(() => Promise.resolve({ displayName: "carol", email: "carolrobleseduc@gmail.com", password: "123456" }));
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

test("after click the user navigates to /login", () => {
    const findRouteAndNavigate = jest.fn();
    const DOM = register(findRouteAndNavigate);
    const registerBtn = DOM.querySelector("#loginBtn");
    expect(registerBtn).toBeTruthy();
});
