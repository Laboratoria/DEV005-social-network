import { validarRutaHome } from '../utilitaries/ruteo';

function Profile(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');

  title.textContent = 'Perfil';
  section.append(title);

  validarRutaHome(navigateTo, (isLogged) => {
    if (isLogged) {
      title.textContent = 'ESTAS LOGGEADO';
    }
  });

  return section;
}
export default Profile;
