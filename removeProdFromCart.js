import { getCartProductFromLS } from "./getCartProductFromLS"
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const  removeProdFromCart=(id)=>{
    //local storage se data mila
    let cartProducts=getCartProductFromLS(); 

    cartProducts=cartProducts.filter((curProd)=> curProd.id !==id);
    //update the localstorage after removing the item
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));

    //to remove card from cart
    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();

        // show toast when when product deleted
        showToast("delete",id);
    }

    updateCartValue(cartProducts);
}