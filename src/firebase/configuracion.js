// Importando las funciones necesarias de los SDK de Firebase que queremos utilizar en nuestro proyecto.
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// Configurando los datos necesarios de nuestro proyecto de Firebase.
const firebaseConfig = {
    apiKey: "AIzaSyDtSDPy-s_BfkmGTU9Pp5Rq7-Wce6YuZYs",
    authDomain: "social-network-424d1.firebaseapp.com",
    projectId: "social-network-424d1",
    storageBucket: "social-network-424d1.appspot.com",
    messagingSenderId: "1033573715706",
    appId: "1:1033573715706:web:0995720ee00b8e31f1c343",
};

// Inicializando la aplicación de Firebase
const app = initializeApp(firebaseConfig);
// Inicializando la autenticación
const auth = getAuth(app);
// Obteniendo la instancia de Firestore para comenzar a utilizar la base de datos en nuestra aplicación web
// const database = getFirestore();
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
export { auth, app, signIn, registerUser };
