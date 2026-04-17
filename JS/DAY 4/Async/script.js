console.log("Start");

for(let i=0;i<5000;i++){
    console.log(i);
}


console.log("End");



//setTimeout is used to execute a function after a specified delay. It takes two parameters: the function to be executed and the delay in milliseconds.
setTimeout(()=>{
    console.log("Inside setTimeout");
},2000);

console.log("After setTimeout");




//setInterval is used to execute a function repeatedly after a specified interval of time. It will continue to execute the function until it is stopped using clearInterval().
setInterval(()=>{
    console.log("Inside setInterval");
},3000);

console.log("After setInterval");



let greet = setInterval(()=>{
    console.log("Hello");
},1000);

setTimeout(()=>{
    clearInterval(greet); //Clears the interval set by greet, stopping the repeated execution of the function that logs "Hello".
    console.log("Stopped greeting");
},5000);

