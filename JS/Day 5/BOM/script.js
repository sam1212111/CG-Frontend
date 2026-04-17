//BOM - Browser Object Model
//Browser Object Model is a collection of objects that represent the browser and its components. It allows us to interact with the browser and manipulate its behavior.

console.log(window)


let a = prompt("Enter ur name"); //prompt is a method of the window object that displays a dialog box that prompts the user for input. It returns the input value as a string.


window.alert("Hello"); //alert is a method of the window object that displays an alert dialog box with a specified message and an OK button. It does not return any value.


window.confirm("Ok"); //confirm is a method of the window object that displays a dialog box with a specified message, an OK button, and a Cancel button. It returns true if the user clicks OK, and false if the user clicks Cancel.


// window.open("https://www.google.com"); //open is a method of the window object that opens a new browser window or tab with a specified URL. It returns a reference to the new window object.

// window.close(); //close is a method of the window object that closes the current browser window. It does not return any value. Note that it can only be called on windows that were opened by the same script, and it may not work in some browsers due to security restrictions.