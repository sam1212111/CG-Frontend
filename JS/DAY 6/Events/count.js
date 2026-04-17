let count = 0;

let countElement = document.getElementById("count");

function decrement() {
    count--;
    countElement.innerText = count;
}

function increment() {
    count++;
    countElement.innerText = count;
}

function reset() {
    count = 0;
    countElement.innerText = count;
}