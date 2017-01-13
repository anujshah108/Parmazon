import axios from 'axios'
import store from '../store'

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
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_ORDER_PRODUCTS = 'RECEIVE_ORDER_PRODUCTS'
export const RECEIVE_CART_PRODUCTS = 'RECEIVE_CART_PRODUCTS'
export const RECEIVE_CREATED_ORDER = 'RECEIVE_CREATED_ORDER'


//PRODUCTS

export function receiveAllProducts(products) {
 return {
   type: RECEIVE_ALL_PRODUCTS,
   products
 };
}

export function receiveProduct(product) {
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

export function receiveAllOrders(orders) {
 return {
   type: RECEIVE_ALL_ORDERS,
   orders
 };
}

export function receiveOrder(order) {
 return {
   type: RECEIVE_ORDER,
   order
 };
}

export function receiveAllUserOrders(orders) {
 return {
   type: RECEIVE_USER_ORDERS,
   orders
 };
}

export function sendCreatedCart(order) {
 return {
   type: RECEIVE_CREATED_ORDER,
   order
 };
}


export function fetchOrdersFromServer() {
 return function(dispatch) {
   axios.get('/api/orders/')
     .then(foundOrders => {
       dispatch(receiveAllOrders(foundOrders.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

export function fetchUserOrdersFromServer(id) {
 return function(dispatch) {

   axios.get(`/api/users/${id}/orders`)
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

export function createCart() {
 return function(dispatch) {
   axios.get(`/api/orders/`)
     .then(Order => {
       dispatch(sendCreatedCart(Order.data));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

//USERS

export function receiveAllUsers(users) {
 return {
   type: RECEIVE_ALL_USERS,
   users
 };
}

export function receiveUser(user) {
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

// REVIEWS

export function receiveRating(rating) {
 return {
   type: RECEIVE_RATING,
   rating: rating.data
 };
}

export function receiveReviews(reviews) {
 return {
   type: RECEIVE_REVIEWS,
   reviews: reviews.data
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

export function fetchReviewsforProduct(id) {
 return function(dispatch) {
   axios.get(`/api/products/${id}/reviews`)
     .then(reviews => {
       dispatch(receiveReviews(reviews));
     })
     .catch(err => {
       console.error(err);
     });
 };
}

//CART

export function receiveCart(cart) {
 return {
   type: RECEIVE_CART,
   cart: cart.data
 };
}

export function fetchOpenCart() {
    return function(dispatch) {
      axios.get(`/api/orders/cart/user/`)
        .then(cart => {
          if(cart){
          dispatch(receiveCart(cart));
          dispatch(fetchProductsForCart(cart.data.id));
          }
        })
        .catch(err => {
          console.error(err);
        });
    };
  }

//  productOrders for Order/Cart
export function receiveProductsForOrder(products) {
 return {
   type: RECEIVE_ORDER_PRODUCTS,
   products: products.data
}
}


export function receiveProductsForCart(products) {
 return {
   type: RECEIVE_CART_PRODUCTS,
   products: products.data
}
}

 export function fetchProductsForOrder(id) {
    return function(dispatch) {
      axios.get(`/api/orders/${id}/products/`)
        .then(products => {
          dispatch(receiveProductsForOrder(products));
        })
        .catch(err => {
          console.error(err);
        });
    };
  }

   export function fetchProductsForCart(id) {
    return function(dispatch) {
      axios.get(`/api/orders/${id}/products/`)
        .then(products => {
          dispatch(receiveProductsForCart(products));
        })
        .catch(err => {
          console.error(err);
        });
    };
  }



