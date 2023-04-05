// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtRQY-ggHLO4343_IXaN6dDpsYA9nQhhA',
  authDomain: 'mascoteando-fcfad.firebaseapp.com',
  databaseURL: 'https://mascoteando-fcfad-default-rtdb.firebaseio.com',
  projectId: 'mascoteando-fcfad',
  storageBucket: 'mascoteando-fcfad.appspot.com',
  messagingSenderId: '1072708099174',
  appId: '1:1072708099174:web:efebbf77616881bbb861a7',
  measurementId: 'G-JM74KS7VQM',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Configurando auth

export const auth = getAuth(app);
