import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig';

const registerConfig = (email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    resolve({ email: user.email });
  })
    .catch((error) => {
      const errorMessage = error.message;
      reject(errorMessage);
    });
});

export default registerConfig;
