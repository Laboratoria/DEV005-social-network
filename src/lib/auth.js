import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from 'firebase/auth';

import {
  collection, addDoc, getDocs, onSnapshot, doc as firestoreDoc, deleteDoc, getDoc,
} from 'firebase/firestore';

import { db, auth } from './firebaseConfig.js';

const saveTask = async (taskTitle, taskDescription) => {
  try {
    const docRef = await addDoc(collection(db, 'tasks'), {
      taskTitle,
      taskDescription,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, 'tasks'));
  return querySnapshot;
};

const onGetTasks = (callback) => {
  const unsub = onSnapshot(collection(db, 'tasks'), callback);
  return unsub;
};

const deleteTask = async (id) => {
  try {
    await deleteDoc(firestoreDoc(db, 'tasks', id));
    console.log('Document with ID:', id, 'successfully deleted.');
  } catch (e) {
    console.error('Error deleting document:', e);
  }
};

const getTask = async (id) => {
  try {
    const docRef = firestoreDoc(db, 'tasks', id);
    const doc = await getDoc(docRef);
    if (doc.exists()) {
      return doc.data();
    }
    console.log('No such document!');
    return null;
  } catch (e) {
    console.error('Error getting document:', e);
    return null;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  const taskList = document.querySelector('#task-list');
  const form = document.querySelector('#formPost');

  onGetTasks((querySnapshot) => {
    taskList.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      task.id = doc.id;
      const taskTitle = task.taskTitle;
      const taskDescription = task.taskDescription;
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `<h2>${taskTitle}</h2>
                      <p>${taskDescription}</p>
                      <button class="delete-button" data-id="${task.id}">Eliminar</button>
                      <button class="edit-button" data-id="${task.id}">Editar</button>`;
      taskList.appendChild(taskItem);

      const btnsDelete = document.querySelectorAll('.delete-button');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async () => {
          const taskId = btn.dataset.id;
          await deleteTask(taskId);
        });
      });

      const btnsEdit = document.querySelectorAll('.edit-button');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          const newDoc = await getTask(e.target.dataset.id);
          const newTask = newDoc;

          form.title.value = newTask.taskTitle;
          form.description.value = newTask.taskDescription;
        });
      });
    });
  });
});

export const submitForm = async () => {
  const taskTitle = document.querySelector('.task-title');
  const taskDescription = document.querySelector('.task-description');

  await saveTask(taskTitle.value, taskDescription.value);

  // Limpiar los campos del formulario
  taskTitle.value = '';
  taskDescription.value = '';

  await getTasks();
  taskTitle.focus();
};

export const loginPatitas = () => {
  const email = document.getElementById('mail').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.code);
      console.log(err.message);
    });
};

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Comentario', user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      console.log('erorrrrrr', errorMessage);
      // ...
    });
};

export const loginWithTwitter = () => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // ..
    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      console.log('erorrrrrr', errorMessage);
      // ...
    });
};
