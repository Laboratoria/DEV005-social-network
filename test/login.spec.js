import { login } from "../src/pages/login.js";

describe("login", () => {
    test("Debe representar el componente de inicio de sesión", () => {
        // Llama a la función login para obtener el contenedor
        const container = login();
        // Verifica que el contenedor tenga la clase "contentLR"
        expect(container.classList.contains("contentLR")).toBe(true);
        // Verifica la existencia de los elementos en el contenedor
        const mailUserLogin = container.querySelector("#mailUserLogin");
        const passwordUserLogin = container.querySelector("#passwordUserLogin");
        const loginBtn = container.querySelector("#loginBtn");
        const registerBtn = container.querySelector("#registerBtn");
        expect(mailUserLogin).toBeTruthy();
        expect(passwordUserLogin).toBeTruthy();
        expect(loginBtn).toBeTruthy();
        expect(registerBtn).toBeTruthy();
    });
    test("Debe llamar a la función findRouteAndNavigate al hacer clic en el botón de registro", () => {
        // Crea una función simulada para findRouteAndNavigate
        const findRouteAndNavigate = jest.fn();
        // Llama a la función login pasando la función simulada como argumento
        const container = login(findRouteAndNavigate);
        // Obtiene el elemento de botón de registro
        const registerBtn = container.querySelector("#registerBtn");
        // Simula un evento de clic en el botón de registro
        registerBtn.dispatchEvent(new MouseEvent("click"));
        // Verifica que la función findRouteAndNavigate haya sido llamada con el argumento "/register"
        expect(findRouteAndNavigate).toHaveBeenCalledWith("/register");
    });
});
