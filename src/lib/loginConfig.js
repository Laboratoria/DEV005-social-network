// Acceso de usuarios existentes
// https://firebase.google.com/docs/auth/web/start?hl=es-419#web-version-9_1
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebaseConfig.js';

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
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    console.log('sign in with google');
  } catch (error) {
    console.log(error);
  }
};
export const loginWithGithub = () => {
  const providerGithub = new GithubAuthProvider();
  signInWithPopup(auth, providerGithub)
    .then((credentials) => {
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
// salir de sesión