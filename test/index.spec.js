/**
 * @jest-environment jsdom
 */
import "firebase/firestore";
import "firebase/auth";
import { auth } from "../src/firebase/configuration.js";
import { homeLogic } from "../src/lib/index.js";

describe("homeLogic", () => {
    test("Debe verificar el contenedor y los elementos HTML necesarios", () => {
        // create mock container element with necessary HTML elements
        const container = document.createElement("DIV");
        container.innerHTML = `
        <textarea id="commentField"></textarea>
        <button id="publishBtn"></button>
        <div id="publications"></div>
        <button id="signOffBtn"></button>
        <span id="userName"></span>
      `;

        // create mock user object in localStorage
        const user = { displayName: "John Doe" };
        window.localStorage.setItem("user", JSON.stringify(user));

        // create mock signOut function and attach to auth object
        const signOutMock = jest.fn();
        const signOutSpy = jest.spyOn(auth, "signOut").mockImplementation(signOutMock);

        // mock window.location.href
        delete window.location;
        window.location = { href: "" };

        // call homeLogic function with mock container
        homeLogic(container);

        // verify necessary HTML elements are present and have correct text or values
        expect(container.querySelector("#commentField")).toBeTruthy();
        expect(container.querySelector("#publishBtn")).toBeTruthy();
        expect(container.querySelector("#publications")).toBeTruthy();
        expect(container.querySelector("#signOffBtn")).toBeTruthy();
        expect(container.querySelector("#userName")).toBeTruthy();
        expect(container.querySelector("#userName").textContent).toBe(user.displayName);

        // simulate click on signOffBtn and verify signOut function is called
        container.querySelector("#signOffBtn").click();
        expect(signOutMock).toHaveBeenCalled();

        // verify window.location.href is updated
        expect(window.location.href).toBe("welcome");

        // reset mocks and spies
        signOutSpy.mockRestore();
        window.location = undefined;
    });
});
