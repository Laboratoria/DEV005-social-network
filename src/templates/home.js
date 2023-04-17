import { exit } from '../lib/auth.js';

export default function home() {
  const section = document.createElement('section');
  const htmlBienvenida = `
  <div>
    Bienvenida a Mascoteando, este será el muro.

    Próximamente...
    Developers trabajando
   
    <button name="logOut" id="logOut" class="logOut">logOut</button>
  </div>`;

  section.innerHTML = htmlBienvenida;

  const btnLogOut = section.querySelector('#logOut');
  btnLogOut.addEventListener('click', () => {
    exit();
  });

  return section;
}
