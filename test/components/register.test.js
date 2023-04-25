/**
 * @jest-environment jsdom
 */
import register from '../../src/components/register.js';
// import * as auth from '../../src/lib/auth.js';

describe('register', () => {
  test('is a function', () => {
    expect(typeof register).toBe('function');
  });

  test('has 3 buttons', () => {
    const DOM = document.createElement('div');
    DOM.appendChild(register());
    const hasThreeButtons = DOM.querySelector('#send-info, #google-reg, #github-reg');
    expect(hasThreeButtons).not.toBe(undefined);
  });

  test('navigates to home when the button is clicked', () => {
    const navigateTo = jest.fn();
    const DOM = document.createElement('div');
    DOM.appendChild(register(navigateTo));
    const btnReturn = DOM.querySelector('#return');
    btnReturn.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});
