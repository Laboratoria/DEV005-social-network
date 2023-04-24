// Acceso de usuarios existentes
// https://firebase.google.com/docs/auth/web/start?hl=es-419#web-version-9_1
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

// TODO: Función del logueo previamente registrado
export const loginConfig = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve({ email: user, password: user.password });
      console.log(userCredential);
    })
    .catch((error) => {
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
      // The signed-in user info.
      const user = result.user;
      resolve({ user });
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      reject(errorCode, errorMessage);
    });
});

// TODO: Función de logeo con Github
export const loginWithGithub = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const githubUser = result.user;
      console.log(githubUser);
      console.log(credential);
      console.log('sign in with Github');
    }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
};
// TODO: Función de logeo con Twitter

export const loginWithTwitter = () => new Promise((resolve, reject) => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result);
      console.log(credential);
      console.log('Sign in with twitter');
      const user = result.user;
      resolve({ user });
    })
    .catch((error) => {
      const codeError = error.code;
      if (codeError === 'auth/account-exists-with-different-credential') {
        console.log(codeError);
      }
      reject(error.code);
    });
});
export const signOutSession = () => {
  signOut(auth).then(() => {
    alert('OK Cerrar Sesión');
  }).catch((error) => {
    const errores = error.code;
    alert(errores);
  });
};
