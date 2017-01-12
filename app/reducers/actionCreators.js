import axios from 'axios';

export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const RECEIVE_ALL_ORDERS = 'RECEIVE_ALL_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const RECEIVE_USER_ORDERS = 'RECEIVE_USER_ORDERS'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_RATING = 'RECEIVE_RATING';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_CART = 'RECEIVE_CART'


//PRODUCTS

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
   axios.get(`/api/products/${id}`)
     .then(foundProduct => {
       dispatch(receiveProduct(foundProduct.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

//ORDERS

function receiveAllOrders(orders) {
 return {
   type: RECEIVE_USER_ORDERS,
   orders
 };
}

function receiveOrder(order) {
 return {
   type: RECEIVE_ORDER,
   order
 };
}

function receiveAllUserOrders(orders) {
 return {
   type: RECEIVE_ALL_ORDERS,
   orders
 };
}


export function fetchOrdersFromServer() {
 return function(dispatch) {
   axios.get('/api/orders')
     .then(foundOrders => {
       dispatch(receiveAllOrders(foundOrders.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

export function fetchUserOrdersFromServer() {
 return function(dispatch) {
   axios.get(`/api/user/${id}/orders`)
     .then(foundOrders => {
       dispatch(receiveAllUserOrders(foundOrders.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

export function fetchSingleOrder(id) {
 return function(dispatch) {
   axios.get(`/api/orders/${id}`)
     .then(foundOrder => {
       dispatch(receiveOrder(foundOrder.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

//USERS

function receiveAllUsers(users) {
 return {
   type: RECEIVE_ALL_USERS,
   users
 };
}

function receiveUser(user) {
 return {
   type: RECEIVE_USER,
   user
 };
}

export function logOutUser() {
  return {
    type: LOGOUT_USER,
    user: {}
}
}

export function fetchUsersFromServer() {
 return function(dispatch) {
   axios.get('/api/users')
     .then(foundUsers => {
       dispatch(receiveAllUsers(foundUsers.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

export function fetchSingleUser(id) {
 return function(dispatch) {
   axios.get(`/api/users/${id}`)
     .then(foundUser => {
       dispatch(receiveUser(foundUser.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

// RATING

function receiveRating(rating) {
 return {
   type: RECEIVE_RATING,
   rating: rating.data
 };
}

export function fetchRatingforProduct(id) {
 return function(dispatch) {
   axios.get(`/api/products/${id}/review`)
     .then(rating => {
       dispatch(receiveRating(rating));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

//CART

function receiveCart(cart) {
 return {
   type: RECEIVE_CART,
   cart
 };
}

export function fetchOpenCart(id) {
  if(currentUser.id){
    return function(dispatch) {
      axios.get(`'/cart/user/${id}`)
        .then(cart => {
          dispatch(receiveCart(cart));
        })
        .catch(err => {
          console.error(err);
        });
    };
  }
  else{
    return function(dispatch) {
      axios.get(`'/cart/guest/${id}/`)
        .then(cart => {
          dispatch(receiveCart(cart));
        })
        .catch(err => {
          console.error(err);
        });
    };
  }
}
