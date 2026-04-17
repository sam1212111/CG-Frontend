// Async- Await

// Async- Await is a syntactic sugar over Promises. It allows us to write asynchronous code in a more synchronous way, making it easier to read and understand.

async function fetchData() {

    let resp= await fetch('https://fakestoreapi.com/products');
    console.log(resp);
    let data = await resp.json();
    console.log(data);
    console.log(data[1]);
    console.log(data[1].category);
    console.log(data[1]['title']);

}

fetchData();

// json stands for JavaScript Object Notation. It is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data in web applications.

//Normal Javascript Object
let person={
    userName: "John",
    age: 30,
    isMarried: false,
    skills: ["JavaScript", "HTML", "CSS"],
    greet:function(){
        console.log("Hello, my name is " + this.userName);
    },
    address:{
        pin: 12345,
        country: "Australia"
    },
    kids:undefined, 
    ex:null,
    salary: 50000
}


//convert into json

personJSON = JSON.stringify(person);
console.log(personJSON);
let personObj = JSON.parse(personJSON);
console.log(personObj);
//Undefined,BigInt, Function, Symbol, and properties that store undefined will be omitted from the JSON string. If any of these values are encountered during stringification, they will be either omitted (when found in an object) or changed to null (when found in an array).

//                              DATATYPE OF JSON IS STRING                                           //


// async function fetchData() {

//     let resp = await fetch('https://fakestoreapi.com/products');
//     let data = await resp.json();

//     let container = document.getElementById("products");

//     data.forEach(product => {
//         let div = document.createElement("div");

//         div.innerHTML = `
//             <h3>${product.title}</h3>
//             <p>Category: ${product.category}</p>
//             <p>Price: $${product.price}</p>
//             <img src="${product.image}" width="100">
//             <hr>
//         `;

//         container.appendChild(div);
//     });

// }

// fetchData();