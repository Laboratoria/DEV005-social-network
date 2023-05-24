import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  arrayRemove,
  arrayUnion,
  getFirestore,

} from 'firebase/firestore';
import { db } from './index.js';
/**
 * Funcionalidades del crud para el post de la pagina web
 * fuentes del uso https://www.youtube.com/watch?v=ey4k6mW9ds4
 * @param {*} title ;
 * @param {*} description ;
 * @param {*} userData ;
 */

/*
*guarda los datos hacia fire store
*
 */
export const saveTask = (title, description, userData) => {
  const user = {
    uid: userData.uid,
    email: userData.email,
  };
  addDoc(collection(db, 'task'), {
    title, description, user, like: [], date: serverTimestamp(),
  });
};

/*
*trae los datos del fire base
*leer task
 */
export const getTask = () => getDocs(collection(db, 'task'));
export const oneGetTask = (callback) => onSnapshot(collection(db, 'task'), callback);
export const deleTask = (id) => deleteDoc(doc(db, 'task', id));
export const getTasks = (id) => getDoc(doc(db, 'task', id));

export const updateTask = (id, newFields) => updateDoc(doc(db, 'task', id), newFields);

export const giveLike = (id, email, onFinish) => {
  console.log('givelike= ', id, 'emails = ', email);

  const foo = async () => {
    const postRef = doc(db, 'task', id);
    console.log(`PostRef : ${postRef}`);
    const postSnap = await getDoc(postRef);
    console.log(` postSnap : ${postSnap}`);
    const post = postSnap.data();
    console.log('post', post);
    const like = post.like || [];
    console.log(`likedBy : ${like}`);
    let newCount;
    let giveLikeMode;

    if (like.includes(email)) {
      await updateDoc(postRef, {
        like: arrayRemove(email),
      });
      newCount = like.length - 1;
      giveLikeMode = 'REMOVE_LIKE';
    } else {
      await updateDoc(postRef, {
        like: arrayUnion(email),
      });
      newCount = like.length + 1;
      giveLikeMode = 'ADD_LIKE';
    }
    console.log('contador de likes:', newCount);

    onFinish(newCount, giveLikeMode);
  };
  foo();
};
// Likes
// export const updateLike = (id, uid) => updateDoc(doc(getFirestore(), 'task', id), {
//   likes: arrayUnion(uid),
// });

// export const removeLike = (id, uid) => updateDoc(doc(getFirestore(), 'task', id), {
//   likes: arrayRemove(uid),
// });
