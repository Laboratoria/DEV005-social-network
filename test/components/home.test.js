/**
 * @jest-environment jsdom
 */
import home from '../../src/components/home.js';
import * as auth from '../../src/lib/auth.js';

describe('home', () => {
  test('is a function', () => {
    expect(typeof home).toBe('function');
  });

  test('has 3 buttons', () => {
    const DOM = document.createElement('div');
    DOM.appendChild(home());
    const hasThreeButtons = DOM.querySelector('#login, #google-login, #gh-login');
    expect(hasThreeButtons).not.toBe(undefined);
  });

  test('has 2 inputs', () => {
    const DOM = document.createElement('div');
    DOM.appendChild(home());
    const hasTwoInputs = DOM.querySelector('#user-email, #user-pass');
    expect(hasTwoInputs).not.toBe(undefined);
  });

  test('navigates to register when the button is clicked', () => {
    const navigateTo = jest.fn();
    const DOM = document.createElement('div');
    DOM.appendChild(home(navigateTo));
    const btnRegister = DOM.querySelector('#h-register');
    btnRegister.click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
});

describe('login button', () => {
  const DOM = document.createElement('div');
  DOM.appendChild(home());
  const email = DOM.querySelector('#user-email');
  const password = DOM.querySelector('#user-pass');
  email.value = 'example@mail.com';
  password.value = '123456';
  jest.spyOn(auth, 'logInWithEmail').mockImplementation(() => Promise.resolve(email, password));
  const logInButton = DOM.querySelector('#login');
  logInButton.click();
  test('calls logInWithEmail', () => {
    expect(auth.logInWithEmail).toHaveBeenCalledTimes(1);
  });
});

describe('Google login button', () => {
  const DOM = document.createElement('div');
  DOM.appendChild(home());
  jest.spyOn(auth, 'accessWithGoogle').mockImplementation(() => Promise.resolve());
  const googleButton = DOM.querySelector('#google-login');
  googleButton.click();
  test('calls accessWithGoogle', () => {
    expect(auth.accessWithGoogle).toHaveBeenCalledTimes(1);
  });
});

describe('GitHub login button', () => {
  const DOM = document.createElement('div');
  DOM.appendChild(home());
  jest.spyOn(auth, 'accessWithGithub').mockImplementation(() => Promise.resolve());
  const githubButton = DOM.querySelector('#gh-login');
  githubButton.click();
  test('calls accessWithGithub', () => {
    expect(auth.accessWithGithub).toHaveBeenCalledTimes(1);
  });
});
