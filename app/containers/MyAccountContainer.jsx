import {connect} from 'react-redux'
import MyAccount from '../components/MyAccount'
import store from '../store'

function mapStateToProps(state) {
  // console.log(state)
  return {
    currentUser: state.users.currentUser,
    userOrders: state.users.userOrders
	}
}
function mapDispatchToProps(state) {
  return {
  };
}
const MyAccountContainer = connect(mapStateToProps, mapDispatchToProps)(MyAccount);
export default MyAccountContainer;