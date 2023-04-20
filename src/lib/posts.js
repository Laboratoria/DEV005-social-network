/* export const addPost=(text)=>{
    // conectar a firestore (addDoc o setDoc)
    // guardar el post en la coleccion posts
} */
import {Firebase} from './firebase.js'

const {
db, auth, addDoc, getDocs, doc, collection, deleteDoc, updateDoc, arrayRemove, arrayUnion, 
} = Firebase;

