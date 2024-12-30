# Firebase Data Access Error: Property 'data' of undefined

This repository demonstrates a common error when working with Firebase and asynchronous operations. The error occurs when attempting to access data from a Firebase document snapshot before the asynchronous `getDoc` operation has completed.  This typically results in a `TypeError: Cannot read properties of undefined (reading 'data')`.

## Bug
The `bug.js` file showcases the erroneous code which fails to properly handle the promise returned by `getDoc`.  It tries to access data immediately, leading to the error.

## Solution
The `bugSolution.js` file provides the correct approach, utilizing `.then()` to handle the promise resolution and access the data only after it's available.