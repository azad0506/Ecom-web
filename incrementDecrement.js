import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {

    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    //get data from local storage
    let localCartProduct = getCartProductFromLS();
    let existingProd = localCartProduct.find((curProd) => curProd.id === id);

    if (existingProd) {
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }
    else {
        localStoragePrice = price;
        price = price;
    }

    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
            quantity += 1;
            localStoragePrice=price*quantity;

        }
        else if (quantity === stock) {
            quantity = stock;
            localStoragePrice = price * stock;
        }
    }
    if(event.target.className==="cartDecrement"){
        if(quantity>1){
            quantity-=1;
            localStoragePrice=price*quantity;

        }
       }

       //finally we will update the price in localstorage
     // localStoragePrice=price*quantity;
     localStoragePrice=Number(localStoragePrice.toFixed(2));

    let updateCart={id,quantity,price: localStoragePrice}

        updateCart=localCartProduct.map((curdProd)=>{
            return curdProd.id===id?updateCart:curdProd;
        })
        localStorage.setItem("cartProductLS",JSON.stringify(updateCart));

        //we update the value on the screen on cart price, quantity
        productQuantity.innerText=quantity;
        productPrice.innerText=localStoragePrice;

        updateCartProductTotal();
}