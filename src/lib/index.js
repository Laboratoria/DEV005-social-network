/**
 * En este archivo se cargan todas las configuraciones para utilizar los servicios
 * de firebase. Se exportan las variables auth, db y analytics que contienen las
 * instancias a cada servicio para ser utilizadas en los archivos correspondientes
 * a cada servicio.
 *
 * const auth = contiene la instancia para el servicio de autenticación
 * const db = contiene la instancia para el servicio de firestore (base de datos)
 * const analytics = contiene la instancia para el servicio de google analytics
 *
 * Este archivo se construyó con la configuración propuesta por la documentación
 * de Firebase. https://firebase.google.com/docs/web/setup?authuser=0&hl=es
 * NO MODIFICAR
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCJkOKQj2PEjG36vfSdYjbyFS0uKVN27xU',
  authDomain: 'social-network-32d0b.firebaseapp.com',
  projectId: 'social-network-32d0b',
  storageBucket: 'social-network-32d0b.appspot.com',
  messagingSenderId: '1080177069334',
  appId: '1:1080177069334:web:a32e42521d7ee084fc1437',
  measurementId: 'G-85WJKPPQ4B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db, analytics };
