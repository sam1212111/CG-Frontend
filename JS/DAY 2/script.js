// let info = "Hello how are you doing  ?";

// console.log(info.length);
// let removedInfo = info.trimEnd();
// console.log(removedInfo);
// console.log(removedInfo.length);


function add(a=10, b=20) {
    return a + b;
}
console.log(add(20,40));

// anynomous function / unnamed function

//funtion expression
let sum = function (a, b) {
    return a + b;
}
console.log(sum(5, 10));


//another way to call an anynomous function

//normal way
(function (a, b) {
    return a + b;
}(20, 40));

//IIFE - Immediately Invoked Function Expression
(function (a, b) {
    console.log(a + b);
})(20, 40);


// Higher order functions and Callback functions

//higher order function - a function that takes another function as an argument/parameter or returns a function as a result

//Callback function - a function that is passed as an argument to another function and is executed after some operation has been completed

function hof(name,clb) {
    console.log(name);
    clb();
}

function callback(){
    console.log("I am from callback function")
}

hof("John", callback);


//Arrow function introduced in ES6
//shrorter syntax for writing functions
//No need to use the function keyword
//explicit return we have to use the return keyword with curly braces
let arrowFunc = (a, b) => {
    return a + b;
}

console.log(arrowFunc(5, 10));

//if there is only one parameter we can omit the parentheses
//implicit return we dont have to use the return keyword and curly braces
let square = x => x * x;
console.log(square(5));



//Nested functions - a function defined inside another function

function outerFunction() {
    console.log("I am from outer function");
    function innerFunction() {
        console.log("I am from inner function");
    }
    innerFunction();
}

outerFunction();

function parent(){

    let name = "John";
    let city = "New York";
    console.log(name);

    function child(){
        console.log(city);
    }
    child();
}
parent();



function outer(){
    let name = "John";

    return function inner(){
        console.log(name);
    }
}

outer()(); //function currying - a function that returns another function and the returned function has access to the variables of the outer function even after the outer function has finished executing


//currying - a function that takes multiple arguments one at a time and returns a new function for each argument until all arguments have been provided and the final result is returned

let curriedFunc = a => b => c => a * b * c;
console.log(curriedFunc(2)(3)(4)); //24