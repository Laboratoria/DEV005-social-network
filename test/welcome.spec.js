import { welcome } from "../src/pages/welcome.js";

jest.mock("../src/pages/img.js", () => ({
    sports: "",
    logo: "",
}));

describe("welcome", () => {
    test("Debe representar el componente de bienvenida", () => {
        // Llama a la función welcome para obtener el contenedor
        const container = welcome();
        // Verifica que el contenedor tenga la clase "contentW"
        expect(container.classList.contains("contentW")).toBe(true);
        // Verifica la existencia de los elementos en el contenedor
        const registerBtn = container.querySelector("#registerBtn");
        const loginBtn = container.querySelector("#loginBtn");
        expect(registerBtn).toBeTruthy();
        expect(loginBtn).toBeTruthy();
    });
    test("Debe llamar a la función findRouteAndNavigate al hacer clic en el botón de registro", () => {
        // Crea una función simulada para findRouteAndNavigate
        const findRouteAndNavigate = jest.fn();
        // Llama a la función welcome pasando la función simulada como argumento
        const container = welcome(findRouteAndNavigate);
        // Obtiene el elemento de botón de registro
        const registerBtn = container.querySelector("#registerBtn");
        // Simula un evento de clic en el botón de registro
        registerBtn.dispatchEvent(new MouseEvent("click"));
        // Verifica que la función findRouteAndNavigate haya sido llamada con el argumento "/register"
        expect(findRouteAndNavigate).toHaveBeenCalledWith("/register");
    });
    test("Debe llamar a la función findRouteAndNavigate al hacer clic en el botón de inicio de sesión", () => {
        // Crea una función simulada para findRouteAndNavigate
        const findRouteAndNavigate = jest.fn();
        // Llama a la función welcome pasando la función simulada como argumento
        const container = welcome(findRouteAndNavigate);
        // Obtiene el elemento de botón de inicio de sesión
        const loginBtn = container.querySelector("#loginBtn");
        // Simula un evento de clic en el botón de inicio de sesión
        loginBtn.dispatchEvent(new MouseEvent("click"));
        // Verifica que la función findRouteAndNavigate haya sido llamada con el argumento "/login"
        expect(findRouteAndNavigate).toHaveBeenCalledWith("/login");
    });
});
