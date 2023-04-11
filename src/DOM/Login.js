// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { LoginTemplate } from '../templates/loginTemplate.js';
import { auth } from '../lib/index.js';

/* export const Login = (onNavigate) => {
  const div = document.createElement('div');

  div.innerHTML = LoginTemplate;

  const register = div.querySelector('#linkRegister');
 
  register.addEventListener('click', () => {
    onNavigate('/registrate');
  });

  return div;
}; */

export const Login = () => {
  const div = document.createElement('div');
  div.innerHTML = LoginTemplate;
  const loginGoogle = div.querySelector('#btn-google');
  loginGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
    } catch (error) {
      console.log(error);
    }
  });
  return div;
};