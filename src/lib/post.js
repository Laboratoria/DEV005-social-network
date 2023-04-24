import { collection, query } from 'firebase/firestore';
import { db } from './firebase.js';

export const ref = () => query(collection(db, 'posts'));
