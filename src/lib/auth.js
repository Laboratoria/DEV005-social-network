import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './index.js';

const provider = new GoogleAuthProvider();
export const loginGoogle = () => signInWithPopup(auth, provider);

export const singin = (email, password) => signInWithEmailAndPassword(auth, email, password);
