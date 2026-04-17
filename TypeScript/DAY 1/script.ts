
export {};

//export keyword is used to make the file a module. A module is a file that contains code that is executed in its own scope, rather than in the global scope. This means that variables, functions, and classes defined in a module are not accessible outside of the module unless they are explicitly exported. By using the export keyword, we can specify which variables, functions, or classes should be accessible outside of the module. In this case, we are exporting an empty object, which means that nothing is being exported from this module.

console.log("Good Morning TS");


let a =10;
a =20;


let marks = undefined;

marks =100;
marks="sdf";

//this is the limitation of type inference. It will not work if we assign undefined or null to a variable. In that case, we need to explicitly specify the type of the variable.

let age: number = 21;
age = 22;

console.log(marks,age);

console.log("SDFsd");


function add(a:number,b:number):void{
    console.log(a+b);
}

add(10,20);

function stringConcat(a:String,b:String):void{
    console.log(a+" "+b);
}

stringConcat("Hello","World");

function stringConcat1(a: string, b?: string): void {
    console.log(a + " " + (b || ""));
}

stringConcat1("Hello"); // Output: "Hello "
stringConcat1("Hello", "World"); // Output: "Hello World"


// Optional parameters are parameters that may or may not be provided when calling a function. They are denoted by a question mark (?) after the parameter name. In the above example, the parameter b is optional, which means that it can be omitted when calling the function stringConcat1. If b is not provided, it will be undefined, and we can handle that case in the function body as shown above.

// In TypeScript, we can also specify default values for parameters. This means that if a parameter is not provided when calling the function, it will take on the default value specified in the function definition. For example:

function stringConcat2(a: string, b: string = "World"): void {
    console.log(a + " " + b);
}

stringConcat2("Hello"); // Output: "Hello World"


//We can also make the datatype of the parameter optional by using the union type with undefined. For example:
function stringConcat3(a: string, b: string | undefined): void {
    console.log(a + " " + (b || ""));
}   

stringConcat3("Hello", undefined); // Output: "Hello "


function optionalParameter(a: string | number){
    return a;
}

console.log(optionalParameter("Hello"));
console.log(optionalParameter(123));

// In the above example, the parameter a can be either a string or a number. This allows us to call the function optionalParameter with either a string or a number as an argument. The function will return the value of a, which can be of either type.

//array in typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["Hello", "World"];
let mixed: (string | number)[] = [1, "Hello", 2, "World"];


let tuple:readonly [number, string] = [1, "Hello"];
//tuple is a fixed length array that can contain different types of values. In the above example, the tuple can only contain a number and a string, and it cannot be modified after it is created because it is marked as readonly. 


// Object in TypeScript
let person ={
    userName: "John",
    marks: 90
}

console.log(person);


let person1:{
    /*readonly*/ userName:string, //we can also use readonly keyword to make the property immutable
    marks: number,
    address:{
        city: string,
        pincode?: number
    }
}={
    userName: "John",
    marks: 90,
    address:{
        city: "New York"
    }
}

console.log(person1.userName="sam");
console.log(person1);



// Type alias in TypeScript - it is a way to give a name to a type , A type alias lets you define a custom name for any type:. It is defined using the type keyword. For example: 

type id = number;

let addhar: id = 12345;

console.log(addhar);


type order = 'pending' | 'completed' | 'cancelled'; // In the above example, we have defined a type alias called order which can only take one of the three string literal values: 'pending', 'completed', or 'cancelled'. This is an example of a union type, which allows us to specify that a variable can be one of several types.

let orderStatus: order = 'pending';

type marks1 = number[];

let finalMarks:marks1  = [90, 80, 70];

console.log(finalMarks);


// In TypeScript, we can also define type aliases for more complex types, such as objects and functions. For example:

type Person = {
    name: string;
    age: number;
    address: {
        city: string;
        pincode: number;
    };
}

let person2: Person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        pincode: 12345
    }
}


// In the above example, we have defined a type alias called Person which represents an object with three properties: name, age, and address. The address property is itself an object with two properties: city and pincode. We can then use this type alias to create variables of type Person, which must conform to the structure defined by the type alias.


//Type alias in Objects

type student  = {
    name: string;
    marks: number;
    isPass:boolean;
}

let sam : student = {
    name: "Sam",
    marks: 85,
    isPass: true
}


//intersection  with type alias

type A = {
    a: number;
}

type B = {
    b: string;
}

type C = A & B; // Intersection of A and B

let obj: C = {
    a: 10,
    b: "Hello"
}


//Unknown type in TypeScript - it is a type that represents any value, but it is safer than the any type because it requires us to perform type checking before we can use the value. The unknown type is defined using the unknown keyword. For example:

let a1:unknown;
a1 = 'sam';
a1 = true;

if (typeof a1 === 'string') {
    console.log(a1.toUpperCase()); // We can safely use string methods on a1 because we have checked that it is a string
}else if (typeof a1 === 'boolean') {
    console.log(a1); // We can safely use boolean methods on a1 because we have checked that it is a boolean
}else{
    console.log("a1 is of unknown type");
}


//Any type in TypeScript - it is a type that represents any value, and it allows us to perform any operation on the value without any type checking. The any type is defined using the any keyword. For example:

let a2:any;
a2 = 'sam';
a2 = true;

console.log(a2.toUpperCase()); // We can use string methods on a2 without any type checking, which can lead to runtime errors if a2 is not actually a string




// Interface in TypeScript - it is a way to define the structure of an object. An interface defines the properties and methods that an object must have. It is defined using the interface keyword. For example:

interface Person1 {
    name: string;
    age: number;
    address: {
        city: string;
        pincode: number;
    };
}

let raj: Person1 = {
    name: "Raj",
    age: 25,
    address: {
        city: "Mumbai",
        pincode: 400001
    }
}

// function infinite():never{
//     return 4;
// }