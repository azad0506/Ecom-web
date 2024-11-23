import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS=()=>{
let cartProducts=localStorage.getItem("cartProductLS");//cartProductLS file in localstorage 

if(!cartProducts){
    return [];
}

cartProducts=JSON.parse(cartProducts);
//update the cart button value 
    updateCartValue(cartProducts);

return cartProducts;
}