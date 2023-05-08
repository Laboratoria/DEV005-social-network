import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  doc as firestoreDoc,
  deleteDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore';

import { db } from './firebaseConfig.js';

//guardar los datos en firebase en la coleccion tasks
const saveTask = async (taskTitle, taskGender, taskAge, taskDescription) => {
  try {
    const docRef = await addDoc(collection(db, 'tasks'), {
      taskTitle,
      taskGender,
      taskAge,
      taskDescription,
      date: serverTimestamp(), //obtener la marca de tiempo del servidor de Firebase
    });

    console.log('Document written with ID: ', docRef.id);
    } catch (e) {
    console.error('Error adding document: ', e);
  }
};

//devuelve todos los documentos guardados en la coleccion tasks de la base de datos
const getTasks = async () => {
  const querySnapshot = await getDocs(collection(db, 'tasks'));
  return querySnapshot;
};

//obtener un documento especifico de la base de datos con id y traer sus datos
export const getTask = async (id) => {
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

//para cambios en la coleccion tasks de la base de datos
export const onGetTasks = (callback) => {
  const unsub = onSnapshot(collection(db, 'tasks'), callback);
  return unsub;
};

export const deleteTask = async (id) => {
  console.log(id);
  try {
    await deleteDoc(firestoreDoc(db, 'tasks', id));
    console.log('Document with ID:', id, 'successfully deleted.');
  } catch (e) {
    console.error('Error deleting document:', e);
  }
};

const updateTask = async (id, updateTask) => {
  try {
    const taskRef = firestoreDoc(db, 'tasks', id);
    await updateDoc(taskRef, updateTask);
    console.log('Document with ID:', id, 'successfully updated.');
  } catch (e) {
    console.error('Error updating document:', e);
  }
};

export const submitForm = async (editStatus, id) => {
  const taskTitle = document.querySelector('.task-input-title');
  const taskGender = document.querySelector('input[name="radiobuttons"]:checked');
  const taskAge = document.querySelector('.task-age')
  const taskDescription = document.querySelector('.task-description');

  if (!editStatus) {
    await saveTask(taskTitle.value, taskGender.value, taskAge.value, taskDescription.value);
  } else {
    await updateTask(id, {
      taskTitle: taskTitle.value,
      taskGender: taskGender.value,
      taskAge: taskAge.value,
      taskDescription: taskDescription.value,
    });
    const btnTaskForm = document.querySelector('#btnSend');
    btnTaskForm.innerText = 'Enviar';
  }

  // Limpiar los campos del formulario
  taskTitle.value = '';
  taskGender.checked = false; 
  taskAge.value = '0';
  taskDescription.value = '';

  await getTasks();
  taskTitle.focus();
};
