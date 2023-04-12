// eslint-disable-next-line no-unused-vars

export default function Home(navegacion) {
  const section = document.createElement('section');
  if (!sessionStorage.getItem('user')) {
    navegacion('/');
    return '<></>';
  }
  const htmlBienvenida = `
  <div>
    well don you're login
    <button name="logOut" id="logOut" class="logOut">logOut</button>
  </div>`;

  section.innerHTML = htmlBienvenida;

  const btnLogOut = section.querySelector('#logOut');
  btnLogOut.addEventListener('click', () => {
    sessionStorage.clear();
    navegacion('/');
  });

  return section;
}
