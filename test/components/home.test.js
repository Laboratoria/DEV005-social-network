/**
 * @jest-environment jsdom
 */
import home from '../../src/components/home.js';

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
});
