// Importando las funciones necesarias de los SDK de Firebase que queremos utilizar en nuestro proyecto.
import { initializeApp } from "firebase/app";
import {
    getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, signOut,
} from "firebase/auth";
import {
    getFirestore, collection, addDoc, getDocs, onSnapshot, updateDoc, doc, deleteDoc, arrayUnion, arrayRemove,
} from "firebase/firestore";

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
const db = getFirestore(app);

// Inicializando la autenticación
const auth = getAuth(app);
// Creando una instancia del proveedor de autenticación de GoogleAuthProvider() para permitir el inicio de sesión con Google.

const provider = new GoogleAuthProvider();

const postsCollection = collection(db, "posts");

const postDocuments = getDocs(postsCollection);

// Definiendo una función que inicia sesión en Firebase Auth con email y password.
// const signIn = async (email, password) => {
//     // Inicia sesión con email y password
//     const { user } = await signInWithEmailAndPassword(auth, email, password);
//     // Retorna el objeto del usuario que inició sesión
//     return user;
// };
const signIn = (email, password) => new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            resolve(user);
        })
        .catch((error) => {
            reject(error);
        });
});

// Definiendo una función que registra a un usuario en Firebase Auth y le asigna un displayName.
// const registerUser = async (displayName, email, password) => {
//     // Crea el usuario con su email y password
//     const { user } = await createUserWithEmailAndPassword(auth, email, password);
//     // Actualiza el perfil del usuario con el displayName
//     await updateProfile(auth.currentUser, { displayName });
//     // Retorna el objeto del usuario registrado
//     return user;
// };
const registerUser = (displayName, email, password) => new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            updateProfile(auth.currentUser, { displayName })
                .then(() => {
                    resolve(user);
                })
                .catch((error) => {
                    reject(error);
                });
        })
        .catch((error) => {
            reject(error);
        });
});

// Definiendo una función que inicia sesión en Firebase Auth con Google.
// const googleSign = async (providers) => {
//     // Inicia sesión con Google utilizando un popup
//     const { user } = await signInWithPopup(auth, provider);
//     // Retorna el objeto del usuario que inició sesión con Google
//     return user;
// };
const googleSign = () => new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            resolve(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            reject(console.error(errorMessage));
        });
});

// const addPost = (publication) => {
//     addDoc(postsCollection, {
//         publication,
//         date: Date.now(),
//     });
// };
const addPost = (comment) => new Promise((resolve, reject) => {
    addDoc(postsCollection, {
        comment,
        date: Date.now(),
    })
        .then((docRef) => {
            resolve(docRef.id);
        })
        .catch((error) => {
            reject(error);
        });
});

// const paintPostsRealTime = (postsCallback) => {
//     onSnapshot(query(postsCollection, orderBy("date", "desc")), postsCallback);
// };
const paintPostsRealTime = (postsCallback) => {
    onSnapshot(collection(db, "posts"), (querySnapshot) => {
        postsCallback(querySnapshot);
    });
};
const logOut = () => signOut(auth);

const deletePost = (id) => new Promise((resolve, reject) => {
    deleteDoc(doc(getFirestore(), "posts", id))
        .then((res) => resolve(res))
        .catch((error) => reject(error));
});

const editPost = (id, newFields) => new Promise((resolve, reject) => {
    updateDoc(doc(getFirestore(), "posts", id), newFields)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
});

const aboutLikes = (id, userId) => new Promise((resolve, reject) => {
    updateDoc(doc(getFirestore(), "posts", id), { likes: arrayUnion(userId) })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
});

const aboutDislikes = (id, userId) => new Promise((resolve, reject) => {
    updateDoc(doc(getFirestore(), "posts", id), { likes: arrayRemove(userId) })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
});

export {
    auth, app, db, provider, signIn, registerUser, googleSign, postsCollection, postDocuments, addPost, paintPostsRealTime, logOut, deletePost, editPost, aboutLikes, aboutDislikes,
};
