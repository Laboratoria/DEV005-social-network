import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase.js';

// pantalla inicial
export function init(navigateTo) {
  const section = document.createElement('section');
  section.innerHTML = `
  <div class="init"> 
    <img src='./lib/img/logo.png' class= 'logo'>
    <form class="formInit">
      <button class='logIn'>Inicia Sesión</button>
      <button class='register'>Regístrate</button>
      <hr class='separator1'> 
      <span class='separatorText'>o</span>
      <hr class='separator2'>
      <button class='google'> 
        <img src='https://www.enriquedans.com/wp-content/uploads/2017/07/Google-G.jpg' class='imgGoogle'>
        Registrate con Google
      </button>
    </form>
  </div>
`;

  const logIn = section.querySelector('.logIn');
  logIn.addEventListener('click', () => {
    navigateTo('/login');
  });

  const register = section.querySelector('.register');
  register.addEventListener('click', () => {
    navigateTo('/register');
  });

  const google = section.querySelector('.google');
  google.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        GoogleAuthProvider.credentialFromResult(result);
        /* const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ... */
        navigateTo('/mainScreen');
      }).catch((error) => {
        /*  // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email; */
        // The AuthCredential type that was used.
        GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });

  section.append(logIn, register, google);

  return section;
}

// pantalla - inicio de sesión
/* function login(navigateTo) {
  const sectionLogin = document.createElement('div');
  sectionLogin.innerHTML = `<section class="cardLogin">
  <img src='./lib/img/logo.png' class= 'logo'>
  <h2 class="initSection">Inicio de Sesión</h2>
  <form class="formInteraction">
  <label class="labelEmail">Correo Electronico</label>
  <input class="inputEmail" id="inputEmail" placeholder="ejemplo@gmail.com"></input>
  <label class="labelPassword">Contraseña</label>
  <input class="inputPassword" id="inputPassword" type="password" placeholder="********"></input>
  <button class="getInt">Ingresar</button>
  </form>
  <botton class="bottomText">¿No tienes una cuenta? Regístrate</botton>
  </section >
  `;
  const checkIn = sectionLogin.querySelector('.bottomText');
  checkIn.addEventListener('click', () => {
    navigateTo('/register');
  });

  const keep = sectionLogin.querySelector('.getInt');
  keep.addEventListener('click', () => {
    navigateTo('/mainScreen');
  });

  return sectionLogin;
}
 */
// pantalla - error
function mistake(navigateTo) {
  const bug = document.createElement('div');
  bug.innerHTML = `<section class="errorSection"><img class="imgBug" src="../lib/img/error404.png">
  <h2 class="text"> Error 404: página no encontrada.</h2>
  <botton class="init"> <u>volver al Inicio</u> <botton>
  </section>`;

  const keep = bug.querySelector('.init');
  keep.addEventListener('click', () => {
    navigateTo('/mainScreen');
  });
  return bug;
}

function create(navigateTo) {
  const sectionCreate = document.createElement('div');
  sectionCreate.innerHTML = `<section class="creatSection">
  <img src='./lib/img/logo.png' class= 'logo'>
  <form class = "formCreateAccount">
  <h2 class = "createAccount">Crear cuenta</h2>
  <label class="textButtonCreateAccount">Correo Electronico</label>
  <input class="card1" id="card1" placeholder='ejemplo@gmail.com'></input>
  <label class="textPasswordCreateAccount">Contraseña</label>
  <input class="card2" id="card2" type="password" placeholder='********'></input>
  </form>
  <button class="bottomKeep">Guardar</button>
  <button class="bottomText">¿Ya tienes cuenta? Iniciar Sesión</button>
  </section>
  `;
  const logIn = sectionCreate.querySelector('.bottomText');
  logIn.addEventListener('click', () => {
    navigateTo('/login');
  });
  return sectionCreate;
}

function mainScreen() {
  const section = document.createElement('div');
  section.innerHTML = `<section>
  <h2>Welcome to Main Screen!</h2>
  </section>
  `;
  return section;
}

export {
  mistake,
  create,
  mainScreen,
};
