/*

A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

Arguments to .then are optional, and .catch(failureCallback) is short for .then(null, failureCallback)

Important: Always return promises up, otherwise callbacks won't chain, and errors won't be caught (arrow functions return implicitly when {} are left out).

It's possible to chain after a failure, i.e. a catch.

New promises:

*/

new Promise( /* executor */ function(resolve, reject) { ... } );

/*

A Promise object is created using the new keyword and its constructor. This constructor takes as its argument a function, called the "executor function". This function should take two functions as parameters. The first of these functions (resolve) is called when the asynchronous task completes successfully and returns the results of the task as a value. The second (reject) is called when the task fails, and returns the reason for failure, which is typically an error object.

Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:

*/

const wait = time => new Promise(
  resolve => setTimeout(resolve, time),
  reject => console.log('bad') // not really needed for setTimeout
);
wait(10000)
  .then(() => console.log("10 seconds"),
        () => console.log("fail!"))

/*

The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.

*/

let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});




// Promise.all()

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
}); 

Promise.all([p1, p2, p3]).then(values => { 
  console.log(values); // [3, 1337, "foo"] 
});


// this will be counted as if the iterable passed is empty, so it gets fulfilled
var p = Promise.all([1,2,3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1,2,3, Promise.reject(555)]);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log(p);
    console.log(p2);
    console.log(p3);
});