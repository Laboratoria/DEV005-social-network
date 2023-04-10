// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
//  Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8ACKL8U4ji8bqmmykq8warjqGgCuZTZg',
  authDomain: 'social-network-dev-005.firebaseapp.com',
  projectId: 'social-network-dev-005',
  storageBucket: 'social-network-dev-005.appspot.com',
  messagingSenderId: '974878862098',
  appId: '1:974878862098:web:3992591ee2ebb888c6e1cb',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const auth = getAuth();
/* const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
 */