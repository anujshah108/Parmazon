import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import store from '../store'

function mapStateToProps(state) {
  return {
   user: state.users.currentUser
  };
}
function mapDispatchToProps(state) {
  return {
  };
}
const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBarContainer;
