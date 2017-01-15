import {connect} from 'react-redux'
import Checkout from '../components/Checkout'
import store from '../store'

function mapStateToProps(state) {

  return {
    cart: state.orders.cart,
    products: state.orders.cartProducts,
    user: state.users.currentUser
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);
export default CheckoutContainer;