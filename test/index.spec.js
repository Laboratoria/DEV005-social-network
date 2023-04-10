import { signInWithEmailAndPassword } from 'firebase/auth';
import { handleLoginEmail } from '../src/lib/auth.js';
import { navigateTo } from '../src/main.js';

jest.mock('../main.js', () => ({
  navigateTo: jest.fn(),
}));
jest.mock('firebase/app', () => {
  const auth = { signInWithEmailAndPassword };
  const initializeApp = jest.fn(() => ({ auth }));
  return { initializeApp };
});

describe('handleLoginEmail', () => {
  const email = 'test@example.com';
  const password = 'password123';

  it('should call signInWithEmailAndPassword with email and password', async () => {
    const auth = { signInWithEmailAndPassword };
    const initializeApp = jest.fn(() => ({ auth }));
    jest.mock('firebase/app', () => ({ initializeApp }));

    await handleLoginEmail(email, password);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });

  it('should call navigateTo with /wall when signInWithEmailAndPassword is successful', async () => {
    const auth = { signInWithEmailAndPassword };
    const initializeApp = jest.fn(() => ({ auth }));
    jest.mock('firebase/app', () => ({ initializeApp }));

    await handleLoginEmail(email, password);

    expect(navigateTo).toHaveBeenCalledWith('/wall');
  });
});
