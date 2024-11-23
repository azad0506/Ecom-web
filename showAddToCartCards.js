import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts=getCartProductFromLS() //local storage se data mila

let filterProducts=products.filter((curProd)=>{
   // console.log(curProd.name);
   return cartProducts.some((curElem)=> curElem.id===curProd.id);
})
//console.log(filterProducts);


let cartElement=document.querySelector("#productCartContainer");
let templateContainer=document.querySelector("#productCartTemplate");


const showCartProduct=()=>{
    filterProducts.forEach((curProd)=>{

        const {id,name,category,brand,price,stock,description,image }=curProd;
        const productClone=document.importNode(templateContainer.content, true);
  
        productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);

        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productName").textContent=name;
        productClone.querySelector(".productImage").src=image;

        //local storage se actual quantity and price lana hai
        let lSActualData=fetchQuantityFromCartLS(id,price);
        productClone.querySelector(".productQuantity").textContent=lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent=lSActualData.price;

        //remove element from cart
        productClone.querySelector(".remove-to-cart-button")
        .addEventListener("click", ()=>removeProdFromCart(id));

        //INCREMENT AND DECREMENT BUTTON in cart
      productClone.querySelector(".stockElement")
      .addEventListener("click",(event)=> {
        incrementDecrement(event,id,stock,price);

      });

        cartElement.appendChild(productClone);
    });
};

showCartProduct();

//to show the total in cart
updateCartProductTotal();