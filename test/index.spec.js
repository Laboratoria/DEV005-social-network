/**
 * @jest-environment jsdom
 */
import "firebase/firestore";
import "firebase/auth";
import { auth } from "../src/firebase/configuration.js";
import { homeLogic } from "../src/lib/index.js";

describe("homeLogic", () => {
    test("Debe verificar el contenedor y los elementos HTML necesarios", () => {
        const container = document.createElement("DIV");
        container.innerHTML = `
        <textarea id="commentField"></textarea>
        <button id="publishBtn"></button>
        <div id="publications"></div>
        <button id="signOffBtn"></button>
        <span id="userName"></span>
      `;

        const user = { displayName: "John Doe" };
        window.localStorage.setItem("user", JSON.stringify(user));

        const signOutMock = jest.fn();
        const signOutSpy = jest.spyOn(auth, "signOut").mockImplementation(signOutMock);

        delete window.location;
        window.location = { href: "" };

        homeLogic(container);

        expect(container.querySelector("#commentField")).toBeTruthy();
        expect(container.querySelector("#publishBtn")).toBeTruthy();
        expect(container.querySelector("#publications")).toBeTruthy();
        expect(container.querySelector("#signOffBtn")).toBeTruthy();
        expect(container.querySelector("#userName")).toBeTruthy();
        expect(container.querySelector("#userName").textContent).toBe(user.displayName);

        container.querySelector("#signOffBtn").click();
        expect(signOutMock).toHaveBeenCalled();

        expect(window.location.href).toBe("welcome");

        signOutSpy.mockRestore();
        window.location = undefined;
    });
});
