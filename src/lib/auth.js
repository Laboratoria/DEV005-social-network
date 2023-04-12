import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// import labels from "./labels";
import { auth } from './index.js';

export const loginEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
    // Signed in
    //   console.log('entro', user);
    // ...
    })
    .catch(() => {
      // const errorCode = error.code;
      // console.log(errorCode);
      // const errorMessage = error.message;
    // console.log(errorMessage);
    });
};

export const registroUsuario = (email, password) => {
  let respuesta;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      respuesta = userCredential.user;
    const mensajeBienvenida = section.querySelector('#mensaje-bienvenida');
    mensajeBienvenida.innerHTML = `Bienvenida ${nombre} a MASCOTEANDO`;
    mensajeBienvenida.setAttribute('style', 'display:block');
    setTimeout(() => {
    navegacion('/');
    }, '5000');
    return respuesta;
    })
    .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
   errorCorreo.innerHTML = 'Usuario ya registrado';
    } else if (error.code === 'auth/invalid-email') {
     errorCorreo.innerHTML = 'Correo invalido';
    } else if (error.code === 'auth/weak-password') {
    errorClave.innerHTML = 'Contraseña demasiado debil';
  } else if (error.code === 'auth/missing-password') {
    errorClave.innerHTML = 'Contraseña requerida';
    } else if (error.code) {
     errorClave.innerHTML = 'Algo salió mal';
    };
    // ..
  return error;  
  });
  // return respuesta;
};

