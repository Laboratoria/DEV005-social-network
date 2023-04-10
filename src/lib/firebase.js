import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAH8HZslRIokAuOxqVA1hnrZtki-yblyuw',
  authDomain: 'social-network-8a6da.firebaseapp.com',
  databaseURL: 'https://social-network-8a6da-default-rtdb.firebaseio.com',
  projectId: 'social-network-8a6da',
  storageBucket: 'social-network-8a6da.appspot.com',
  messagingSenderId: '142278931596',
  appId: '1:142278931596:web:aac9932ea28474e45437a9',
  measurementId: 'G-R9K8Y36WJ1',
});

export const auth = getAuth(firebaseApp);
