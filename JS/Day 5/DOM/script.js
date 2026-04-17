// Document Object Model (DOM) manipulation
// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM provides a way to manipulate the elements of a web page using JavaScript.



//DOM Tree
// The DOM represents the document as a tree of nodes. Each node represents an element, attribute, or piece of text in the document. The root of the tree is the document object, which represents the entire document. The document object has child nodes that represent the elements in the document, and each element node can have its own child nodes representing its attributes and text content.


//Types of Nodes in DOM Tree
//Document Node
//Attribute Node
//Text Node
//Comment Node

//Accessing DOM Elements
// There are several methods to access DOM elements in JavaScript. Some of the commonly used methods include:

//getElementById returns a reference to the first object with the specified id. It is a fast and efficient way to access an element in the DOM, as it directly retrieves the element based on its unique identifier.
let h1= document.getElementById("heading");
console.log(h1);

//getElementsByClassName returns a live HTMLCollection of elements with the given class name. The returned HTMLCollection is live, meaning that it updates automatically when the document changes. If you add or remove elements with the specified class name after calling getElementsByClassName, the HTMLCollection will reflect those changes.
let p = document.getElementsByClassName("top");
console.log(p);

//getElementsByTagName returns a live HTMLCollection of elements with the given tag name. The returned HTMLCollection is live, meaning that it updates automatically when the document changes. If you add or remove elements with the specified tag name after calling getElementsByTagName, the HTMLCollection will reflect those changes.
let tagName = document.getElementsByTagName("p");
console.log(tagName);


//querySelector returns the first element that matches the specified group of selectors. If no matches are found, it returns null. It is a more modern and flexible method for selecting elements in the DOM compared to older methods like getElementById or getElementsByClassName.
let querySelector = document.querySelector(".top");
console.log(querySelector);

//querySelectorAll returns a static NodeList of all elements that match the specified group of selectors. It does not update automatically when the document changes, meaning that if you add or remove elements that match the selector after calling querySelectorAll, the NodeList will not reflect those changes.
let querySelectorAll = document.querySelectorAll(".top");
console.log(querySelectorAll);


//getElementsByName returns a live NodeList of elements with the given name attribute. The returned NodeList is live, meaning that it updates automatically when the document changes. If you add or remove elements with the specified name attribute after calling getElementsByName, the NodeList will reflect those changes.
let name = document.getElementsByName("p");
console.log(name);



//Creating elements
let div = document.createElement('div');
console.log(div);

// div.innerHTML = "<h2>This is a heading</h2><p>This is a paragraph.</p>";

div.innerText = "This is a div element.";



let body = document.body;
body.append(div);


body.appendChild(div);

//difference between append and appendChild is that append can take multiple arguments and can also append strings, while appendChild can only take a single node and cannot append strings. Additionally, append does not return a value, while appendChild returns the appended node.


//CSS Manipulation

//style property allows you to directly manipulate the inline styles of an element. It is a JavaScript object that represents the CSS styles of an element. You can set or get the value of any CSS property using this property.


let heading = document.getElementById("heading");
// heading.style.color = "rgba(252, 252, 252, 0.8)";
// heading.style.fontSize = "24px";
// heading.style.backgroundColor = "rgba(29, 147, 158, 0.8)";


let btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    heading.classList.toggle("dark");
    btn.innerText = btn.innerText === 'Dark' ? 'Light' : 'Dark';
})



// contains method checks if an element has a specific class. It returns true if the class is present and false if it is not. This method is useful for conditionally applying styles or behaviors based on the presence of a class.
if(heading.classList.contains("dark")){
    console.log("Heading has the 'dark' class.");
}


//add eventlistener method is used to attach an event handler to an element. It takes two arguments: the type of event to listen for (e.g., "click", "mouseover") and the function to execute when the event occurs. This method allows you to respond to user interactions and create dynamic behavior on your web page.

