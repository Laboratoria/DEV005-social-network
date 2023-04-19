// Acceso de usuarios existentes
// https://firebase.google.com/docs/auth/web/start?hl=es-419#web-version-9_1
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebaseConfig.js';

// TODO: Función del logueo previamente registrado
export const loginConfig = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve({ email: user.email, password: user.password });
      console.log(userCredential);
    })
    .catch((error) => {
      // const errorMessage = error.message;
      const errorCode = error.code;
      reject(errorCode);
    });
});

// TODO: Función loginwithGoogle para poder ingresar a la plataforma con correo de Google
export const loginWithGoogle = () => new Promise((resolve, reject) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      console.log('sign in with google');
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      resolve({ user });
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
    });
});
export const loginWithGithub = () => {
  const providerGithub = new GithubAuthProvider();
  signInWithPopup(auth, providerGithub).then((credentials) => {
    const userGithub = credentials.user;
    console.log(userGithub);
    console.log('sign in with Github');
  });
};

/*
const userChange = {};
export const obtenerUsuarioActual = () => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      userChange.email = user.email;
      userChange.uid = user.uid;
      userChange.displayName = user.displayName;
    }
  });
};
*/
