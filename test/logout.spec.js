import { signOut, getAuth } from 'firebase/auth';

import { firebaseApp } from '../src/lib/firebase';

import { logoutApp } from '../src/lib/logout';

jest.mock('firebase/auth', () => ({
  signOut: jest.fn(() => Promise.resolve()),
  getAuth: jest.fn(() => Promise.resolve()),
}));

jest.mock('../src/lib/firebase.js', () => ({
  auth: {},
}));
const auth = getAuth(firebaseApp);
describe('logoutApp', () => {
  it('should call signOut and navigateTo', async () => {
    const navigateTo = jest.fn();
    await logoutApp(navigateTo);

    expect(signOut).toHaveBeenCalledWith(auth);
    expect(navigateTo).toHaveBeenCalledWith('/');
  });

  it('should handle signOut error', async () => {
    const navigateTo = jest.fn();
    signOut.mockImplementationOnce(() => Promise.reject());
    await logoutApp(navigateTo);

    expect(signOut).toHaveBeenCalledWith(auth);
    expect(navigateTo).not.toHaveBeenCalled();
  });
});
