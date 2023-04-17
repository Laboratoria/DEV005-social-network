// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARdzQti_DOLUEHtL-Q7ys-TNmettT1vz4',
  authDomain: 'viajeras-empoderadas-6e528.firebaseapp.com',
  projectId: 'viajeras-empoderadas-6e528',
  storageBucket: 'viajeras-empoderadas-6e528.appspot.com',
  messagingSenderId: '163465380351',
  appId: '1:163465380351:web:6b95e93d59fac1b7d227ca',
  measurementId: 'G-5PWY77GGK1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
