import {connect} from 'react-redux'
import Orders from '../components/Orders'
import store from '../store'

function mapStateToProps(state) {

  return {
  	user: state.users.currentUser,
    allOrders: state.orders.allOrders,
    userOrders: state.orders.userOrders
	}
}
function mapDispatchToProps(state) {
  return {
  };
}
const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders);
export default OrdersContainer;