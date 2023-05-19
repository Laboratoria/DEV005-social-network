// Importando las funciones necesarias de los SDK de Firebase que queremos utilizar en nuestro proyecto.
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";

import {
    getFirestore, collection, addDoc, getDocs, onSnapshot, updateDoc, doc, deleteDoc, arrayUnion, arrayRemove, query, orderBy,
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

// Creando una referencia a la colección de posts en Firestore.
const postsCollection = collection(db, "posts");

// Obteniendo los documentos de la colección de posts.
const postDocuments = getDocs(postsCollection);

// Definiendo una función que inicia sesión en Firebase Auth con email y password.
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
const googleSign = () => new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            resolve(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            // eslint-disable-next-line no-console
            reject(console.error(errorMessage));
        });
});

// Definiendo una función que añade un nuevo post a la colección de posts en Firestore.
const addPost = (comment, user) => new Promise((resolve, reject) => {
    addDoc(postsCollection, {
        comment,
        date: Date.now(),
        likes: [],
        user,
    })
        .then((docRef) => {
            resolve(docRef.id);
        })
        .catch((error) => {
            reject(error);
        });
});

// Definiendo una función que actualiza en tiempo real los posts en la página.
const paintPostsRealTime = (postsCallback) => {
    onSnapshot(query(collection(db, "posts"), orderBy("date", "desc")), (querySnapshot) => {
        postsCallback(querySnapshot);
    });
};
// Definiendo una función que cierra la sesión de usuario actual en Firebase Auth.
const logOut = () => signOut(auth);

// Definiendo una función que elimina un post de la colección de posts en Firestore.
const deletePost = (id) => new Promise((resolve, reject) => {
    deleteDoc(doc(getFirestore(), "posts", id))
        .then((res) => resolve(res))
        .catch((error) => reject(error));
});

// Definiendo una función que actualiza un post de la colección de posts en Firestore.
const editPost = (id, newFields) => new Promise((resolve, reject) => {
    updateDoc(doc(getFirestore(), "posts", id), newFields)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
});

// Definiendo una función que agrega el id de usuario que dio like a la propiedad likes de un post en Firestore.
const aboutLikes = (id, userId) => new Promise((resolve, reject) => {
    updateDoc(doc(getFirestore(), "posts", id), { likes: arrayUnion(userId) })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
});

// Definiendo una función para obtener información sobre los dislikes de un post dado su id y el id del usuario
const aboutDislikes = (id, userId) => new Promise((resolve, reject) => {
    updateDoc(doc(getFirestore(), "posts", id), { likes: arrayRemove(userId) })
        .then((res) => resolve(res))
        .catch((error) => reject(error));
});
export {
    auth, app, db, provider, signIn, registerUser, googleSign, postsCollection, postDocuments, addPost, paintPostsRealTime, logOut, deletePost, editPost, aboutLikes, aboutDislikes,
};
