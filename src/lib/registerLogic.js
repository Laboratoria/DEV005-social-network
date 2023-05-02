//logica de registro , dar funcionalidad al boton registro//

import { register } from "./pages/register.js";
import { getAuth, createUserWithEmailAndPassword, registerUser } from "../firebase/configuracion.js";


//input y botones de pantalla de registro//
// eslint-disable-next-line spaced-comment
//selectores del DOM
//guardando info nombre apellido de input username//
const name = document.getElementById("userName").value;

//guardando info de Usuario de input  "userId"//
const userName = document.getElementById("userId").value;

//guardando info de correo electronico//
const email = document.getElementById("userMail").value;

//guardando info de correo electronico en input//
const password = document.getElementById("userpassword").value;

//creando boton registrarse//
const butonRegister = document.getElementById("registerMailBtn");
console.log(butonRegister);
//eventos de elementos del DOM//
butonRegister.addEventListener("click",()=> {
    console.log("se hizo click");
})




//crear funcion flecha de guardado de datos para enviar registro de usuario//
const register = (container) => {
    const userName = container.querySelector(#userName)
    const userId = container.querySelector(#userId) 
    const userMail = container.querySelector(#userMail)
    const userPassword = container.querySelector(#userPassword) 
    const butonRegister = document.getElementById("registerMailBtn");
    console.log(butonRegister);
//ingresar funciones boleanas , validacion de email con @
    //utilizar la funcion de firebase dentro de esta funcion register 
}




