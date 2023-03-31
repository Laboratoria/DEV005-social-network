// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';
import { async } from 'regenerator-runtime';

const firebaseApp = initializeApp ({
  apiKey: 'AIzaSyDtRQY-ggHLO4343_IXaN6dDpsYA9nQhhA',
  authDomain: 'mascoteando-fcfad.firebaseapp.com',
  projectId: 'mascoteando-fcfad',
  storageBucket: 'mascoteando-fcfad.appspot.com',
  messagingSenderId: '1072708099174',
  appId: '1:1072708099174:web:efebbf77616881bbb861a7',
  measurementId: 'G-JM74KS7VQM',
});


const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9899");
const inicioSesionCorreoClave = async () =>{
  const inicioCorreo = txtCorreo.value;
  const inicioClave = txtClave.value;

  const credencialUsuario = await signInWithEmailAndPassword(auth, inicioCorreo, inicioClave);
  console.log(credencialUsuario.user);

}


// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });


  // const auth = getAuth(firebaseApp);
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   });