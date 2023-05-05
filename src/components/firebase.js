// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDUt_u2dnek0CXMxMN09N6ruXpLl0OdMTM',
    authDomain: 'social-network-coctel.firebaseapp.com',
    projectId: 'social-network-coctel',
    storageBucket: 'social-network-coctel.appspot.com',
    messagingSenderId: '974617436966',
    appId: '1:974617436966:web:ec695d295d8b7e4a9417e7',
    measurementId: 'G-1ED7Y3DXQ5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
