import {connect} from 'react-redux'
import UsersList from '../components/UsersList'
import store from '../store'

function mapStateToProps(state) {

  return {
    allUsers: state.users.allUsers,
    currentUser: state.users.currentUser
	}
}
function mapDispatchToProps(state) {
  return {
  };
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);
export default UsersContainer;