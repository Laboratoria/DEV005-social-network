// Importando las funciones necesarias de los SDK de Firebase que queremos utilizar en nuestro proyecto.
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const database = getFirestore();
const registerUser = async (displayName, email, password) => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName });//
    return user;
};
export { createUserWithEmailAndPassword, auth, registerUser };
