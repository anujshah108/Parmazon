import {connect} from 'react-redux'
import CategoryProduct from '../components/CategoryProduct'
import store from '../store'

function mapStateToProps(state) {
  return {
    products: state.products.allProducts
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const CPContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryProduct);
export default CPContainer;