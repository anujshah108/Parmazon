import {connect} from 'react-redux'
import Product from '../components/Product'
import store from '../store'

function mapStateToProps(state) {
  console.log(state)
  return {
    product: state.products.currentProduct,
    rating: state.products.currentProductRating,
    user: state.users.currentUser
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Product);
export default ProductContainer;