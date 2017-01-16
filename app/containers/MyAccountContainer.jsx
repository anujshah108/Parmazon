import {connect} from 'react-redux'
import MyAccount from '../components/MyAccount'
import store from '../store'

function mapStateToProps(state) {
  // console.log(state)
  return {
  	singleUser: state.users.singleUser,
    currentUser: state.users.currentUser,
    userOrders: state.orders.userOrders,
    allOrders: state.orders.allOrders
	}
}
function mapDispatchToProps(state) {
  return {
  };
}
const MyAccountContainer = connect(mapStateToProps, mapDispatchToProps)(MyAccount);
export default MyAccountContainer;