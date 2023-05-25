/**
 * @jest-environment jsdom
 */

import login from '../src/components/login';

describe('LOGIN', () => {
  test('validacion del modulo login que sea de tipo funcion', () => {
    expect(typeof login).toBe('function');
  });
  test('validacion del modulo login qe no sea nulo', () => {
    const navigateToMock = jest.fn();
    expect(login(navigateToMock)).toBeTruthy();
  });
  test('validacion de la existencia de los coponentes principales en el html de login', () => {
    const navigateToMock = jest.fn();
    // expect(login(navigateToMock)).toBeTruthy();
  });
});
