import { LoginTemplate } from '../templates/loginTemplate.js';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const Login = (onNavigate) => {
  const div = document.createElement('div');
  /* div.className = 'Login';
  div.id = 'login'; */
  div.innerHTML = LoginTemplate;

  const register = div.querySelector('#linkRegister');
  /* const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  }); */

  register.addEventListener('click', () => {
    onNavigate('/registrate');
  });

  return div;
};
