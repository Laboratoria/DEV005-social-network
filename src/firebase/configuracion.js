// Importando las funciones necesarias de los SDK de Firebase que queremos utilizar en nuestro proyecto.
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// Configurando los datos necesarios de nuestro proyecto de Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyDtSDPy-s_BfkmGTU9Pp5Rq7-Wce6YuZYs",
    authDomain: "social-network-424d1.firebaseapp.com",
    projectId: "social-network-424d1",
    storageBucket: "social-network-424d1.appspot.com",
    messagingSenderId: "1033573715706",
    appId: "1:1033573715706:web:0995720ee00b8e31f1c343",
    databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Inicializando la aplicación de Firebase
const app = initializeApp(firebaseConfig);
// Obteniendo la instancia de Firestore para comenzar a utilizar la base de datos en nuestra aplicación web
// const dataBase = getFirestore();

const provider = new GoogleAuthProvider();
// Inicializando la autenticación
const auth = getAuth(app);

// Definiendo una función que inicia sesión en Firebase Auth con email y password.
const signIn = async (email, password) => {
    // Inicia sesión con email y password
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    // Retorna el objeto del usuario que inició sesión
    return user;
};

// Definiendo una función que registra a un usuario en Firebase Auth y le asigna un displayName.
const registerUser = async (displayName, email, password) => {
    // Crea el usuario con su email y password
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    // Actualiza el perfil del usuario con el displayName
    await updateProfile(auth.currentUser, { displayName });
    // Retorna el objeto del usuario registrado
    return user;
};

const callingGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};

export { auth, app, signIn, registerUser, callingGoogle };
