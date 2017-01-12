import {connect} from 'react-redux'
import Cart from '../components/Cart'
import store from '../store'

function mapStateToProps(state) {
  console.log(state)
  return {
    cart: state.orders.cart
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Products);
export default CartContainer;