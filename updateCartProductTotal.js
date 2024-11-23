import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCartProductTotal=()=>{
    //local storage se data mila
    let localCartProduct=getCartProductFromLS(); 

    let imitialValue=0;
    let totalProductPrice=localCartProduct.reduce((accum,
        currElem)=>{
            let productPrice=currElem.price ||0;
            return accum +productPrice;
        },imitialValue);
        console.log(totalProductPrice);

        let productSubTotal=document.querySelector(".productSubTotal");
        let productFinalTotal=document.querySelector(".productFinalTotal");
        productSubTotal.textContent=`₹${totalProductPrice}`;
        productFinalTotal.textContent=`₹${totalProductPrice+50}`;
};