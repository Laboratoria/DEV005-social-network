// Se importan las siguientes funciones y objetos de Firebase.
import { registerUser } from "../firebase/configuration";

// Se define una función llamada registerLogic que toma un elemento container como argumento.
const registerLogic = (container) => {
    // Se obtienen los elementos HTML necesarios:
    const userNameRegister = container.querySelector("#userNameRegister");
    const userMailRegister = container.querySelector("#userMailRegister");
    const userPasswordRegister = container.querySelector("#userPasswordRegister");
    const registerBtn = container.querySelector("#registerBtn");

    // Se define una función llamada showError que toma un mensaje y un elemento como argumentos.
    const showError = (message, element) => {
        // Si hay un mensaje, se muestra en el elemento correspondiente.
        const errorElement = container.querySelector(`#${element}`);
        // Si no hay mensaje, se vacía el elemento.
        errorElement.innerHTML = message;
    };

    // Se define una función llamada validateFields que valida los campos del formulario de inicio de sesión.
    const validateFields = () => {
        // Se define una expresión regular para validar correos electrónicos.
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Si no se ingresó ningún nombre, se muestra un mensaje de error y se devuelve un objeto con la propiedad errors establecida en true.
        if (!userNameRegister.value) {
            showError("Ingresa un nombre de usuario.", "messageErrorUserRegister");
            return { errors: true };
        }
        showError("", "messageErrorUserRegister");

        // Si no se ingresó ningún correo electrónico, se muestra un mensaje de error y se devuelve un objeto con la propiedad errors establecida en true.
        if (!userMailRegister.value) {
            showError("Ingresa un correo electrónico.", "messageErrorMailRegister");
            return { errors: true };
        }
        showError("", "messageErrorMailRegister");

        // Si el correo electrónico no cumple con el formato de la expresión regular, se muestra un mensaje de error y se devuelve un objeto con la propiedad errors establecida en true.
        if (!emailRegex.test(userMailRegister.value)) {
            showError("Ingresa un correo electrónico válido.", "messageErrorMailRegister");
            return { errors: true };
        }
        showError("", "messageErrorMailRegister");

        // Si no se ingresó ningún contraseña, se muestra un mensaje de error y se devuelve un objeto con la propiedad errors establecida en true.
        if (!userPasswordRegister.value) {
            showError("Ingresa una contraseña.", "messageErrorPasswordRegister");
            return { errors: true };
        }
        showError("", "messageErrorPasswordRegister");

        // Si no hay errores en los campos, se eliminan los mensajes de error y se devuelve un objeto con la propiedad errors establecida en false.
        return { errors: false };
    };
    // Se agrega un listener al botón de registrar que llama a validateFields y, si no hay errores, inicia sesión con los datos ingresados.
    registerBtn.addEventListener("click", async () => {
        try {
            const { errors } = validateFields();
            if (errors) return;

            const user = await registerUser(userNameRegister.value, userMailRegister.value, userPasswordRegister.value);
            console.log({ user });

            if (user.email) {
                window.location.href = "/login";
            }
        } catch (error) {
            console.log(error);
            showError("Ocurrió un error al intentar registrar el usuario. Por favor, intenta nuevamente.", "messageErrorPasswordRegister");
        }
    });
};

export { registerLogic };
