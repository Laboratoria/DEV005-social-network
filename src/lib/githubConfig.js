import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig.js';
// import home from '../components/home.js';

// const btnGithub = home().childNodes[2];
// btnGithub.addEvenListener('click', () => {
//    console.log('estoy funcionando');
// });
// console.log (btnGithub);
// export const btnGithub = document.createElement('button');
// btnGithub.addEventListener('click', async () => {
const providerGithub = new GithubAuthProvider();
export const githubConfig = () => {
  const credentials2 = signInWithPopup(auth, providerGithub);
  console.log(credentials2);
  console.log('sign in with github');
  // navigateTo('/muro');
  return credentials2;
};

// catch (error) {
// console.log(error.message);
// };
