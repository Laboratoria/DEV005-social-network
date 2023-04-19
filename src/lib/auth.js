import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { app, auth } from './firebase';

// CORREO Y CONTRASEÑA

export const newAccount = (email, password) => {
  // const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('creado');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error');
      // ..
    });
};

// Registrar/Iniciar sesión con Google
export const accessWithGoogle = (navigateTo) => {
  const provider = new GoogleAuthProvider();
  // const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('signed up with Google');
      navigateTo('/wall');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('error signing up with Google');
      // ...
    });
};

// GITHUB

export const accessWithGithub = (navigateTo) => {
  const provider = new GithubAuthProvider();

  // const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('signed up with Github');
      console.log(result);
      navigateTo('/wall');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GithubAuthProvider.credentialFromError(error);
      console.log('error signing up with Github');
      // ...
    });
};

export const logInWithEmail = (mail, passwrd) => new Promise((resolve, reject) => {
  // const auth = getAuth(app);
  signInWithEmailAndPassword(auth, mail, passwrd)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('logged in with email and password');
      resolve(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error logging in with email and password');
      reject(error);
    });
});

// Ver si el usuario ha iniciado sesión
// const auth = getAuth(app);

const user = auth.currentUser;
if (user) {
  console.log(user);
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  // ...
} else {
  // No user is signed in.
}
