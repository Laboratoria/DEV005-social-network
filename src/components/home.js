import { googleLogout } from '../lib/auth';
import { validarRutaHome } from '../utilitaries/ruteo';
import { homeTemplate } from '../template/home-template';

function home(navigateTo) {
  const sectionHome = document.createElement('section');
  sectionHome.className = 'section-home';
  sectionHome.innerHTML = '';
  sectionHome.innerHTML = homeTemplate;

  // boton de cerrar sesicion
  const gogleBtn = sectionHome.querySelector('#exitBtn');
  gogleBtn.addEventListener('click', async () => {
    googleLogout();
  });

  const openPopup = sectionHome.querySelector('#open-post');
  const closePopup = sectionHome.querySelector('#btnClosePost');
  const containerPopup = sectionHome.querySelector('#backgraund-opacity');
  // boton para abrir el popup y cerrar
  openPopup.addEventListener('click', () => {
    containerPopup.classList.add('show');
    containerPopup.style.visibility = 'visible';
  });
  closePopup.addEventListener('click', () => {
    containerPopup.classList.remove('show');
    containerPopup.style.visibility = 'hidden';
  });
 

  // rutas de validacion
  validarRutaHome(navigateTo, (isLogged) => {
    if (isLogged) {}
  });
  return sectionHome;
}

export default home;
