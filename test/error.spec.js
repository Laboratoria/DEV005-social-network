import { error } from "../src/pages/error.js";

jest.mock("../src/pages/img.js", () => ({
    errorOutline: "",
}));

describe("error", () => {
    test("Debe representar el componente de error", () => {
        // Llama a la función error para obtener el contenedor
        const container = error();
        // Verifica que el contenedor tenga la clase "contentLR"
        expect(container.classList.contains("contentLR")).toBe(true);
        // Verifica la existencia de los elementos en el contenedor
        const errorText = container.querySelector(".errorText");
        const imgError = container.querySelector(".imgError");
        expect(errorText).toBeTruthy();
        expect(imgError).toBeTruthy();
    });
});
