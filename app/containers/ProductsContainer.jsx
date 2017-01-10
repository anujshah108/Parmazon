import {connect} from 'react-redux'
import Products from '../components/Products'
import store from '../store'

function mapStateToProps(state) {
  console.log(state)
  return {
    products: state.products.allProducts
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);
export default ProductsContainer;