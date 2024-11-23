import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

//to add the data in local storage
export const addToCart=(event,id,stock)=>{
let arrLocalStorageProduct=getCartProductFromLS();

    const currentProdElem=document.querySelector(`#card${id}`);
    //console.log(currentProdElem);

    let quantity=currentProdElem.querySelector(".productQuantity").innerText;
    let price=currentProdElem.querySelector(".productPrice").innerText;
    // console.log(quantity,price);
    price=price.replace("₹","")

    //existing productt
    let existingProd=arrLocalStorageProduct.find((curdProd)=>curdProd.id===id);
    if(existingProd){
        // alert("bhai ye product added hai");
        return false;
    }

    console.log(existingProd);
    if(existingProd && quantity>1){
        quantity=Number(existingProd.quantity)+Number(quantity);
        price=Number(price*quantity);
        let updateCart={id,quantity,price}

        updateCart=arrLocalStorageProduct.map((curdProd)=>{
            return curdProd.id===id?updateCart:curdProd;
        })
        // console.log(updateCart);
        localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));
        // show toast when when product added
        showToast("add",id);

    }

    price=Number(price*quantity);
    quantity=Number(quantity);

    let updateCart={id,quantity,price}
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));
    // console.log(quantity,price);

    // update the cart button value 
    updateCartValue(arrLocalStorageProduct);

    // show toast when when product added
    showToast("add",id);



}