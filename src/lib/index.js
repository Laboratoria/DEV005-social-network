// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwPuxNh-3NJIxq9z8Y4NfoPpPWLqLJlb4',
  authDomain: 'sistersvoyage.firebaseapp.com',
  projectId: 'sistersvoyage',
  storageBucket: 'sistersvoyage.appspot.com',
  messagingSenderId: '133024608205',
  appId: '1:133024608205:web:66a786b2451838e29fde84',
  measurementId: 'G-RDX0K7Q397',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Google

// const analytics = getAnalytics(app);
// const db = getFirestore(app);
