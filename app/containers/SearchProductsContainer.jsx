import {connect} from 'react-redux'
import SearchProduct from '../components/SearchProducts'
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
const SPContainer = connect(mapStateToProps, mapDispatchToProps)(SearchProduct);
export default SPContainer;