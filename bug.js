The Firebase SDK might throw an error if you try to access a property of a document snapshot before the promise returned by `get()` has resolved.  This often happens when you're working with asynchronous operations and expecting data immediately. For example:
```javascript
const docRef = doc(db, 'collection', 'docId');
const docSnap = await getDoc(docRef);
console.log(docSnap.data().someField); // Error if getDoc hasn't completed
```
This code will error if `getDoc` is still pending. The solution is to handle the promise properly.
