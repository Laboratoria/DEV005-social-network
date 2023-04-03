import { Login } from '../templates/login.js';

export const loginPage = () => {
    const div = document.createElement('div');
    div.innerHTML = Login;
}