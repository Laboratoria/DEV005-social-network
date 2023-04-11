import { login } from '../src/components/login.js';
import { register } from '../src/components/signup.js';

describe('Build login', () => {
// b.función sea una función
  it('Is a function', () => {
    expect(typeof login).toBe('function');
  });
  it('Create a html element', () => {
    const result = login();
    expect(result.querySelector('.inp-login')).toBeTruthy();
  });
  it('Create all login inputs', () => {
    const result = login();
    expect(result.querySelectorAll('.inp-login')).toHaveLength(2);
  });
});

describe('Build signup', () => {
  // b.función sea una función
  it('Is a function', () => {
    expect(typeof register).toBe('function');
  });
});
/* jest.mock('../src/lib/login.js', () => ({
  navigateTo: jest.fn(),
}));
jest.mock('firebase/app', () => {
  const auth = { signInWithEmailAndPassword };
  const initializeApp = jest.fn(() => ({ auth }));
  return { initializeApp };
}); */
