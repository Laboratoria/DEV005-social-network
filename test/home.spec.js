import { home } from "../src/pages/home.js";

describe("home", () => {
    // Simular un usuario en el localStorage antes de ejecutar las pruebas
    beforeAll(() => {
        const user = { displayName: "John Doe" };
        window.localStorage.setItem("user", JSON.stringify(user));
    });

    // Limpiar el localStorage después de ejecutar las pruebas
    afterAll(() => {
        window.localStorage.removeItem("user");
    });

    test("Debe representar el componente de inicio", () => {
        const container = home();

        expect(container.classList.contains("contentLR")).toBe(true);

        const signOffBtn = container.querySelector("#signOffBtn");
        const userName = container.querySelector("#userName");
        const commentField = container.querySelector("#commentField");
        const publishBtn = container.querySelector("#publishBtn");
        const publications = container.querySelector("#publications");
        const user = JSON.parse(window.localStorage.getItem("user"));
        userName.textContent = user && user.displayName ? user.displayName : "";

        expect(signOffBtn).toBeTruthy();
        expect(userName).toBeTruthy();
        expect(commentField).toBeTruthy();
        expect(publishBtn).toBeTruthy();
        expect(publications).toBeTruthy();
    });
});
