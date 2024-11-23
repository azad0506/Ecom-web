import './style.css'

import products from "./api/products.json"
import {showproductContainer} from './homeProductCards'
// console.log(products);

// define function name showproductContainer that  take an array of products as input 
showproductContainer(products);