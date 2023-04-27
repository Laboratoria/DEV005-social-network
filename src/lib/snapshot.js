import { doc, onSnapshot } from 'firebase/firestore';

const unsub = onSnapshot(doc(db, 'cities', 'SF'), (doc) => {
  console.log('Current data: ', doc.data());
});
