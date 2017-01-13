import {connect} from 'react-redux'
import Order from '../components/Order'
import store from '../store'

function mapStateToProps(state) {
  // console.log(state)
  return {
    singleOrder: state.orders.currentOrder,
    products: state.orders.currentOrderProducts
	}
}
function mapDispatchToProps(state) {
  return {
  };
}
const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Order);
export default OrderContainer;