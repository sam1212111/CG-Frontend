let marks = [85, 90, 78, 92, 88];

let [a,b,c] = marks;
console.log(a); // 85

// exracting properties from object and storing in variables
//we need to use the same name as the property name in the object

let week1 =[10, 20, 30];
let week2 =[40, 50, 60];
//spread operator → ... (three dots) → used to spread elements of an array or properties of an object
//rest operator → ... (three dots) → used to collect remaining elements of an array or properties of an object into a new array or object
let combined = [...week1, ...week2];
console.log(combined); // [10, 20, 30, 40, 50, 60]

let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
let updatedPerson = {
    ...person,
    age: 31, // updating the age property
    country: "USA" // adding a new property
};
console.log(updatedPerson); // { name: "Alice", age: 31, city: "New York", country: "USA" }


function add(a,b,...c){
    console.log(c);
    let res = c.reduce((acc, num) => acc + num, 0);
    return a + b + res;
}


let marks1= [85, 90, 78, 92, 88];
function add1(a,b,c,d,e,f,){
    console.log(a+b+c+d+e+f);
}

add(...marks1);


