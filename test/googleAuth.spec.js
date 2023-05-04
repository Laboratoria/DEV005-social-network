import {
  signInWithRedirect, GoogleAuthProvider, getAuth,
} from 'firebase/auth';

import { firebaseApp } from '../src/lib/firebase.js';

import { signInGoogle } from '../src/lib/googleAuth.js';

jest.mock('firebase/auth', () => ({
  signInWithRedirect: jest.fn(() => Promise.resolve()),
  getAuth: jest.fn(() => Promise.resolve()),
  GoogleAuthProvider: jest.fn(),
}));

const auth = getAuth(firebaseApp);
it('signInGoogle should call signInWithRedirect with auth and provider', () => {
  const provider = new GoogleAuthProvider();

  signInGoogle();

  expect(signInWithRedirect).toHaveBeenCalledWith(auth, provider);
});
