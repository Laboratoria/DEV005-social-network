import { googleLogout } from '../lib/auth';
import { validarRutaHome } from '../utilitaries/ruteo';

function home(navigateTo) {
  const sectionHome = document.createElement('section');
  sectionHome.className = 'section-home';
  sectionHome.innerHTML = '';
  sectionHome.innerHTML = `
  <h2 id="title-home">App Book</h2>
  <button  id="incognitoBtn">incognito</button>
  `;

  const gogleBtn = sectionHome.querySelector('#incognitoBtn');
  gogleBtn.addEventListener('click', async () => {
    googleLogout();
  });
  const title = sectionHome.querySelector('#title-home');

  validarRutaHome(navigateTo, (isLogged) => {
    if (isLogged) {
      title.textContent = 'ESTAS LOGGEADO';
    }
  });
  return sectionHome;
}

export default home;
