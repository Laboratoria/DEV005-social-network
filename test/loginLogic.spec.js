/*
 * @jest-environment jsdom
 */
// import { loginLogic, showError } from "../src/lib/loginLogic.js";
// import * as fbAuth from "firebase/auth";
import { login } from "../src/pages/login.js";
// import { signIn } from "../src/firebase/configuration.js";

describe("after click the user navigates to /home", () => {
    test("should be a function", () => {
        const findRouteAndNavigate = jest.fn();
        const DOM = login(findRouteAndNavigate);
        const loginBtn = DOM.querySelector("#loginBtn");
        expect(loginBtn).toBeTruthy();
    });

    /* describe("loginLogic", () => {
    test("Should be a function that verificate the container", () => {
         const container = document.createElement("DIV");
        container.innerHTML = `
         <input id="mailUserLogin"></input>
         <input id="passwordUserLogin"></input>
         <button id="loginBtn"></button>
        <button id="loginGmailBtn"></button>
      `;
     });
     });

     describe("sign in with email", () => {
  test("click to validate count or not", () => {
    const x = jest.spyOn(fbAuth, "signIn");
  console.log(x);
 .mockImplementation(() => Promise.resolve({ email: "test@test.com", password: "123" }));
 const findRouteAndNavigate = jest.fn();
 const DOM = login(findRouteAndNavigate);
 const mailUser = DOM.querySelector("#mailUserLogin");
 mailUser.value = "test@test.com";
 const passwordUserLogin = DOM.querySelector("#passwordUserLogin");
 passwordUserLogin.value = "123";
 const button = DOM.querySelector("#loginBtn");
 button.click();
 expect(signIn).toHaveBeenCalled(1);
 });
 });

        describe("click to auth with google", () => {
            test("have a sign in with google buttom", () => {
                const findRouteAndNavigate = jest.fn();
                const DOM = login(findRouteAndNavigate);
                expect(DOM).toBeTruthy();
            });
        });
    }); */
});
