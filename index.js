const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.header,.featured-products,.testimonals`)
// sr.reveal(`.nav`,{delay:500})
sr.reveal(`.banner-text`,{interval:200})
sr.reveal(`.latest-products`,{delay: 500,})
sr.reveal(`.cta`,{origin: 'left',distance: '50px',})
// sr.reveal(`.footer`,{origin:'bottom'})

let value = [];

let basket = JSON.parse(localStorage.getItem('data')) || []

function addtocart(product){
 const prod = document.getElementById(`${product}`)
 const name = prod.getElementsByClassName('title')[0].innerHTML;
 const price = prod.getElementsByTagName('small')[0].innerHTML;
 const img = prod.getElementsByTagName('img')[0].currentSrc;
value = [`${name}`,`${price}`,`${img}`];
addedtoCart(value);
}

function addedtoCart(value){
    basket.push({
        name:value[0],
        price:value[1],
        img:value[2]
    })
    localStorage.setItem('data',JSON.stringify(basket))
}





// function addedtoCart(name,price,img){
//     console.log(name)
//     var cart = document.getElementById("col-left-cart")
//     const cartProd = document.createElement('div');
//     cartProd.innerHTML =`<div class="prod-col">
//     <img src="images/All Gadget-1.jpg" alt="">
//     <div class="prod-name">My Gadget</div>
//     <div class="quantity">
//     <button class="subbtn">-</button>
//     <input type="text" placeholder="1">
//     <button class="addbtn">+</button>
//    </div>
//     <div class="delbtn"><i class="fa-solid fa-trash"></i></div>
//    </div>`;
//    console.log(cartProd)
//    console.log(cart);
//    cart.appendChild(cartProd.cloneNode(true));
// }
// addedtoCart()







