import { createUserWithEmailAndPassword } from 'firebase/auth';
import { RegisterTemplate } from '../templates/registerTemplate.js';
import { auth } from '../lib/index.js';

export const Register = () => {
  const div = document.createElement('div');
  div.innerHTML = RegisterTemplate;

  const signupForm = div.querySelector('#signup');
  const email = div.querySelector('#email');
  const user = div.querySelector('#user');
  const pass = div.querySelector('#password');
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(email.value, user.value, pass.value);
    try {
      // eslint-disable-next-line max-len
      const userCredential = await createUserWithEmailAndPassword(auth, email.value, pass.value);
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  });

  return div;
};
