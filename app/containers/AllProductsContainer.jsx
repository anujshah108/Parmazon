import {connect} from 'react-redux'
import AllProducts from '../components/AllProducts'
import store from '../store'

function mapStateToProps(state) {
  console.log(state)
  return {
    products: state.products.allProducts,
    user: state.users.currentUser
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(AllProducts);
export default ProductsContainer;