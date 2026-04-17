let greet = setInterval(()=>{
    console.log("Hello");
},1000);

setTimeout(()=>{
    clearInterval(greet);
    console.log("Stopped greeting");
},5000);