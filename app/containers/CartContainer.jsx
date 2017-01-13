import {connect} from 'react-redux'
import Cart from '../components/Cart'
import store from '../store'

function mapStateToProps(state) {
  console.log(state)
  return {
    cart: state.orders.cart,
    products: state.orders.cartProducts
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default CartContainer;