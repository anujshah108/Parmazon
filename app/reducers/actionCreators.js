import axios from 'axios';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';



function receiveAllProducts(products) {
 return {
   type: RECEIVE_ALL_PRODUCTS,
   products
 };
}

function receiveProduct(product) {
 return {
   type: RECEIVE_PRODUCT,
   product
 };
}



export function fetchProductsFromServer() {
 return function(dispatch) {
   axios.get('/api/products')
     .then(foundProducts => {
       dispatch(receiveAllProducts(foundProducts.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

export function fetchSingleProduct(id) {
 return function(dispatch) {
   axios.get(`api/products/${id}`)
     .then(foundProduct => {
       dispatch(receiveProduct(foundProduct.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}
