import { loginWithGoogle } from '../src/lib/loginWithGoogle.js';
import { signInGoogle } from '../src/lib/googleAuth.js';

// Mock de la función signInGoogle
jest.mock('../src/lib/googleAuth.js', () => ({
  signInGoogle: jest.fn(),
}));

describe('loginWithGoogle', () => {
  // Crear un evento simulado
  const event = {
    preventDefault: jest.fn(),
  };
  it('should be a function', () => {
    expect(typeof loginWithGoogle).toBe('function');
  });

  it('should call event.preventDefault', () => {
    loginWithGoogle(event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });

  it('should call signInGoogle', () => {
    loginWithGoogle(event);
    expect(signInGoogle).toHaveBeenCalled();
  });
});
