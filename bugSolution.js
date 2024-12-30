The corrected code uses async/await to handle the asynchronous operation and only accesses the data after the promise has resolved:
```javascript
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const db = getFirestore();
async function getData() {
  const docRef = doc(db, 'collection', 'docId');
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data().someField);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}
getData();
```
This approach ensures that the `docSnap.data()` call only executes after the `getDoc` promise has successfully resolved, preventing the `undefined` error.  Error handling is also included for robustness.