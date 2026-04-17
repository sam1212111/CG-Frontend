// let subject = ['Java','os','clouds',100,200,40];

// console.log(subject);
// console.log(subject[0]);
// console.log(subject[2]);

// subject[3] = 500;
// console.log(subject);

// console.log(subject.length);

// Methods in array
let marks = [40, 50, 60, 70, 80];
console.log("Initial array:", marks);

// push() → adds element at the end
marks.push(90);
console.log("After push(90):", marks);

// pop() → removes last element
marks.pop();
console.log("After pop():", marks);

// unshift() → adds element at the beginning
marks.unshift(30);
console.log("After unshift(30):", marks);

// shift() → removes first element
marks.shift();
console.log("After shift():", marks);

// splice(start, deleteCount, newElement)
// add element at index 2 without deleting anything
marks.splice(2, 0, 65);
console.log("After splice(2, 0, 65):", marks);

// remove 1 element from index 2
marks.splice(2, 1);
console.log("After splice(2, 1):", marks);

// sort() → ascending (numeric)
marks.sort((a, b) => a - b);
console.log("Ascending sort:", marks);

// sort() → descending
marks.sort((a, b) => b - a);
console.log("Descending sort:", marks);

// length → gives total number of elements
console.log("Length of array:", marks.length);

// indexOf() → returns index of element (first occurrence)
console.log("Index of 60:", marks.indexOf(60));

// includes() → checks if element exists (true/false)
console.log("Includes 70:", marks.includes(70));

// slice(start, end) → returns new array (does NOT modify original)
let sliced = marks.slice(1, 3);
console.log("Slice(1,3):", sliced);
console.log("Original array after slice:", marks);

// concat() → merges arrays
let newMarks = marks.concat([100, 110]);
console.log("After concat:", newMarks);

// join() → converts array to string
console.log("Join with '-':", marks.join("-"));

// reverse() → reverses the array
marks.reverse();
console.log("After reverse:", marks);


let arr = [10, 20, 30, 20];

arr.indexOf(20);       // 1
arr.lastIndexOf(20);   // 3
arr.includes(30);      // true
arr.some(x => x > 25);  // true
arr.every(x => x > 5);  // true
arr.indexOf(20);       // 1
arr.lastIndexOf(20);   // 3
arr.includes(30);      // true
arr.find(x => x > 8);        // 10
arr.findIndex(x => x > 8);   // 1


let userName = "JohnDoe";

let res = userName.split("");
console.log(res);

console.log(res.reverse());
console.log(res.reverse().join(""));


// Map method
let numbers = [1, 2, 3, 4, 5];
let squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared);


// filter method
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// reduce method
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);


// object 
let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    skills: ["JavaScript", "Python", "C++"],
    greet: ()=> {
        console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
    }
};
console.log(person);
console.log(person.name);
console.log(person.skills[1]);
person.greet();


// seal method
Object.seal(person);
person.name = "Bob"; // This will not work as expected due to sealing
console.log(person);
delete person.age; // This will not work due to sealing
console.log(person);


// freeze method
Object.freeze(person);
person.city = "Los Angeles";        // This will not work due to freezing
console.log(person);
delete person.skills;              // This will not work due to freezing
console.log(person);

// Object.keys() → returns array of keys
console.log("Keys:", Object.keys(person));

// Object.values() → returns array of values
console.log("Values:", Object.values(person));

// Object.entries() → returns array of [key, value] pairs
console.log("Entries:", Object.entries(person));

