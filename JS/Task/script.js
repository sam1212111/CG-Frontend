async function fetchProducts(){
    try{
        let response = await fetch('https://fakestoreapi.com/products');
        let products = await response.json();

        let container = document.getElementById('container');

        products.forEach(product => {
            let div = document.createElement('div');
            div.className = "card";
            div.innerHTML = `
            <h2 class="pTitle">${product.title}</h2>
            <img src="${product.image}" class="pImage">
            <p class="desc">${product.description}</p>
            <div class="bottom">
        <p class="price">Price: $${product.price}</p>
        <button class="buyBtn">Buy</button>
    </div>
            `;
            container.appendChild(div);
        });

    } catch(error){
        console.error(error);
    }
}

let btn = document.getElementById('get');
btn.addEventListener('click', fetchProducts);