// Este es el punto de entrada de tu aplicacion

import { Login } from './templates/login.js';
import { Register } from './templates/register.js';
import { Wall } from './templates/wall.js';

//Aqui se supone las rutas correctas serían:
//import { Login } from './DOM/Login.js';
//import { Wall } from './DOM/Wall.js';
//const root = document.getElementById('root');

const routes = {
  '/': Login,
  '/registrate': Register,
  '/muro': Wall,
};

/* document.getElementById('root').innerHTML = Login(); */
/* document.getElementById('root').innerHTML = Register() */
