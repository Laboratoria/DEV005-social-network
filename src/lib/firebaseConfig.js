// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACdLyMpGhBbp5ogyQ2z2-GeDWz4orx4Z4',
  authDomain: 'foodmatch-5bf52.firebaseapp.com',
  projectId: 'foodmatch-5bf52',
  storageBucket: 'foodmatch-5bf52.appspot.com',
  messagingSenderId: '655316254171',
  appId: '1:655316254171:web:2bb64d10e33715580a7bfe',
};

// Initialize Firebase console.log(app)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
