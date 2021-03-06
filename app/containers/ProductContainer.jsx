import {connect} from 'react-redux'
import Product from '../components/Product'
import store from '../store'

function mapStateToProps(state) {

  return {
    product: state.products.currentProduct,
    rating: state.products.currentProductRating,
    user: state.users.currentUser,
    reviews: state.products.currentProductReviews,
    cart: state.orders.cart
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);
export default ProductContainer;