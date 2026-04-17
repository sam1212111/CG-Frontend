// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows us to write asynchronous code in a more synchronous and readable manner.

// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and the promise has a value.
// 3. Rejected: The operation failed, and the promise has a reason for the failure.


let Mypromise = new Promise((res, rej) => {
    // executor function
    // code that performs the asynchronous operation goes here
    // it should call resolve(value) if the operation is successful
    // or reject(reason) if the operation fails

    let pizzaReady = true; // simulating pizza preparation

    if (pizzaReady) {
        res("Pizza is ready!"); // fulfilling the promise
    } else {
        rej("Pizza is not ready yet."); // rejecting the promise
    }
});

console.log(Mypromise);

// consuming the promise using then() and catch() methods
Mypromise
.then((t) => console.log(t))
.catch((e) => console.log(e))
.finally(() => console.log("Promise has been handled."));