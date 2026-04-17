//export keyword is used to make the file a module. A module is a file that contains code that is executed in its own scope, rather than in the global scope. This means that variables, functions, and classes defined in a module are not accessible outside of the module unless they are explicitly exported. By using the export keyword, we can specify which variables, functions, or classes should be accessible outside of the module. In this case, we are exporting an empty object, which means that nothing is being exported from this module.
console.log("Good Morning TS");
let a = 10;
a = 20;
let marks = undefined;
marks = 100;
marks = "sdf";
//this is the limitation of type inference. It will not work if we assign undefined or null to a variable. In that case, we need to explicitly specify the type of the variable.
let age = 21;
age = 22;
console.log(marks, age);
console.log("SDFsd");
function add(a, b) {
    console.log(a + b);
}
add(10, 20);
function stringConcat(a, b) {
    console.log(a + " " + b);
}
stringConcat("Hello", "World");
function stringConcat1(a, b) {
    console.log(a + " " + (b || ""));
}
stringConcat1("Hello"); // Output: "Hello "
stringConcat1("Hello", "World"); // Output: "Hello World"
// Optional parameters are parameters that may or may not be provided when calling a function. They are denoted by a question mark (?) after the parameter name. In the above example, the parameter b is optional, which means that it can be omitted when calling the function stringConcat1. If b is not provided, it will be undefined, and we can handle that case in the function body as shown above.
// In TypeScript, we can also specify default values for parameters. This means that if a parameter is not provided when calling the function, it will take on the default value specified in the function definition. For example:
function stringConcat2(a, b = "World") {
    console.log(a + " " + b);
}
stringConcat2("Hello"); // Output: "Hello World"
//We can also make the datatype of the parameter optional by using the union type with undefined. For example:
function stringConcat3(a, b) {
    console.log(a + " " + (b || ""));
}
stringConcat3("Hello", undefined); // Output: "Hello "
function optionalParameter(a) {
    return a;
}
console.log(optionalParameter("Hello"));
console.log(optionalParameter(123));
// In the above example, the parameter a can be either a string or a number. This allows us to call the function optionalParameter with either a string or a number as an argument. The function will return the value of a, which can be of either type.
//array in typescript
let numbers = [1, 2, 3, 4, 5];
let strings = ["Hello", "World"];
let mixed = [1, "Hello", 2, "World"];
let tuple = [1, "Hello"];
//tuple is a fixed length array that can contain different types of values. In the above example, the tuple can only contain a number and a string, and it cannot be modified after it is created because it is marked as readonly. 
// Object in TypeScript
let person = {
    userName: "John",
    marks: 90
};
console.log(person);
let person1 = {
    userName: "John",
    marks: 90,
    address: {
        city: "New York"
    }
};
console.log(person1.userName = "sam");
console.log(person1);
let addhar = 12345;
console.log(addhar);
let orderStatus = 'pending';
let finalMarks = [90, 80, 70];
console.log(finalMarks);
let person2 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        pincode: 12345
    }
};
let sam = {
    name: "Sam",
    marks: 85,
    isPass: true
};
let obj = {
    a: 10,
    b: "Hello"
};
//Unknown type in TypeScript - it is a type that represents any value, but it is safer than the any type because it requires us to perform type checking before we can use the value. The unknown type is defined using the unknown keyword. For example:
let a1;
a1 = 'sam';
a1 = true;
if (typeof a1 === 'string') {
    console.log(a1.toUpperCase()); // We can safely use string methods on a1 because we have checked that it is a string
}
else if (typeof a1 === 'boolean') {
    console.log(a1); // We can safely use boolean methods on a1 because we have checked that it is a boolean
}
else {
    console.log("a1 is of unknown type");
}
//Any type in TypeScript - it is a type that represents any value, and it allows us to perform any operation on the value without any type checking. The any type is defined using the any keyword. For example:
let a2;
a2 = 'sam';
a2 = true;
console.log(a2.toUpperCase()); // We can use string methods on a2 without any type checking, which can lead to runtime errors if a2 is not actually a string
let raj = {
    name: "Raj",
    age: 25,
    address: {
        city: "Mumbai",
        pincode: 400001
    }
};
export {};
// function infinite():never{
//     return 4;
// }
