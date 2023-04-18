
// importamos la funcion que vamos a testear
/* import { myFunction } from '../src/lib/index';
describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
 */
import { createUserWithEmailAndPassword } from '../_mocks_.js';

describe('deberia iniciar sesión con google', () => {
  it('debería ser una función', () => {
    expect(typeof createUserWithEmailAndPassword).toBe('function');
  });
}); 