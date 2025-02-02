import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer=document.querySelector("#productContainer")
const productTemplate=document.querySelector("#productTemplate");

export const showproductContainer=(products)=>{
    if(!products){
        return false;
    }
   products.forEach((curProd) => {
      
      const {id,name,category,brand,price,stock,description,image }=curProd;
      const productClone=document.importNode(productTemplate.content, true);

      productClone.querySelector(".productName").textContent=name;
      productClone.querySelector(".productImage").src=image;
      productClone.querySelector(".productImage").alt=image;
      productClone.querySelector(".productDescription").textContent=description;
      productClone.querySelector(".category").textContent=category;
      productClone.querySelector(".productStock").textContent=stock;
      productClone.querySelector(".productPrice").textContent= `₹${price}`;

      //INCREMENT AND DECREMENT BUTTON
      productClone.querySelector(".stockElement")
      .addEventListener("click",(event)=> {
        homeQuantityToggle(event,id,stock);

      });

      productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
      
        // ADD TO CART 
      productClone.querySelector(".add-to-cart-button")
      .addEventListener("click",(event)=>{
        addToCart(event,id,stock);
      })
        
      productContainer.append(productClone);
   });
}