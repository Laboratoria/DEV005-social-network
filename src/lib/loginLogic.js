// Se importan las siguientes funciones y objetos de Firebase:
import { auth, signIn } from "../firebase/configuracion";

// Se define una función llamada loginLogic que toma un elemento container como argumento:
const loginLogic = (container) => {
    // Se obtienen los elementos HTML necesarios:
    const mailUserLogin = container.querySelector("#mailUserLogin");
    const passwordUserLogin = container.querySelector("#passwordUserLogin");
    const loginBtn = container.querySelector("#loginBtn");

    // Se define una función llamada showError que toma un mensaje y un elemento como argumentos:
    const showError = (message, element) => {
        const errorElement = container.querySelector(`#${element}`);

        // Si hay un mensaje, se muestra en el elemento correspondiente:
        if (message) {
            return (errorElement.innerHTML = message);
        }
        // Si no hay mensaje, se vacía el elemento:
        errorElement.innerHTML = "";
    };

    // Se define una función llamada validateFields que valida los campos del formulario de inicio de sesión:
    const validateFields = () => {
        // Se define una expresión regular para validar correos electrónicos:
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        // Si no se ingresó ningún correo electrónico, se muestra un mensaje de error y se devuelve un objeto con la propiedad errors establecida en true:
        if (!mailUserLogin.value) {
            showError("Ingresa un correo", "messageErrorMailLogin");
            return { errors: true };
        }
        // Si el correo electrónico no cumple con el formato de la expresión regular, se muestra un mensaje de error y se devuelve un objeto con la propiedad errors establecida en true:
        if (!emailRegex.test(mailUserLogin.value)) {
            showError("Ingresa un correo válido. Por ejemplo: example@gmail.com", "messageErrorMailLogin");
            return { errors: true };
        }
        // Si no se ingresó ninguna contraseña, se muestra un mensaje de error y se devuelve un objeto con la propiedad errors establecida en true:
        if (!passwordUserLogin.value) {
            showError("Ingresa una contraseña", "messageErrorPasswordLogin");
            return { errors: true };
        }
        // Si no hay errores en los campos, se eliminan los mensajes de error y se devuelve un objeto con la propiedad errors establecida en false:
        showError("", "messageErrorMailLogin");
        showError("", "messageErrorPasswordLogin");
        return { errors: false };
    };

    // Se agrega un listener al botón de inicio de sesión que llama a la función validateFields y, si no hay errores, inicia sesión con los datos ingresados:
    loginBtn.addEventListener("click", async () => {
        try {
            const { errors } = validateFields();
            if (errors) return;

            const user = await signIn(mailUserLogin.value, passwordUserLogin.value);
            console.log({ user });

            if (user.email) {
                window.location.href = "/";
            }
        } catch (error) {
            console.log(error);
            showError("El correo o la contraseña es incorrecta", "messageErrorPasswordLogin");
        }
    });
};

export { loginLogic };
