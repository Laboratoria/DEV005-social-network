import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAH8HZslRIokAuOxqVA1hnrZtki-yblyuw',
  authDomain: 'social-network-8a6da.firebaseapp.com',
  databaseURL: 'https://social-network-8a6da-default-rtdb.firebaseio.com',
  projectId: 'social-network-8a6da',
  storageBucket: 'social-network-8a6da.appspot.com',
  messagingSenderId: '142278931596',
  appId: '1:142278931596:web:aac9932ea28474e45437a9',
  measurementId: 'G-R9K8Y36WJ1',
});
// Crear constantes para el uso de firebase
const auth = getAuth(firebaseApp);

// Elementos del DOM
const loginEmail = document.getElementById('email');
const loginPassword = document.getElementById('password');
const loginError = document.getElementById('login-error');

// Crear una función para llamar a firebase cuando se haga login con Email y Password
const loginEmailPassword = async () => {
  const email = loginEmail.value;
  const password = loginPassword.value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(`Usuario conectado como: ${userCredential.user.email}`);
    loginError.innerHTML = `Usuario conectado como: ${userCredential.user.email}`;
  } catch (error) {
    console.log(error);
    loginError.innerHTML = 'Correo o contraseña incorrecta';
  }
};

const handleLogin = async () => {
  const email = loginEmail.value;
  const password = loginPassword.value;

  await loginEmailPassword(email, password, loginError);
};

const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', (event) => {
  event.preventDefault();
  handleLogin();
});

// Mostrar o esconder labels
const inputs = document.querySelectorAll('.inp-login');

inputs.forEach((input) => {
  const label = document.querySelector(`label[for="${input.id}"]`);

  input.addEventListener('click', () => {
    label.classList.add('active');
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('active');
    }
  });
});
