/////////  !--event
// function greet(){
//     alert('hello world');
// }


///////prevent default

let form = document.getElementById('form');
let inp = document.getElementById('userName');
let h2 = document.querySelector('#head');
let h3 = document.querySelector('#pass');

form.addEventListener('submit', function(event){
    event.preventDefault();

    let res = inp.value;

    let li = document.createElement('li');
    li.innerText = res;

    let del = document.createElement('button');
    del.innerText = 'Delete';

    del.addEventListener('click', function(){
        li.remove();
    });

    li.appendChild(del);
    h2.appendChild(li);

    // let pass = document.getElementById('password');
    // h2.innerText = `USERNAME: ${res}`;
    // h3.innerText = `PASSWORD: ${pass.value}`;
    // confirm('Are you sure you want to submit the form?');
    // form.submit();
});

// h2.addEventListener('click', ()=>{
    // h2.style.color = 'red';
// });

