import axios from 'axios'
import {fetchSingleUser, logOutUser} from './actionCreators'

const reducer = (state=null, action) => {
  switch(action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch => {
    axios.post('/api/auth/local/login',
      {username, password})
      .then(() => dispatch(whoami()))
      .catch(() => dispatch(whoami()))
  }

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      .then(() => dispatch(logOutUser()))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
        if (user.id) dispatch(fetchSingleUser(user.id))
      })
      .catch(failed => dispatch(authenticated(null)))

export const signup = (firstName, lastName, email, password) =>
  dispatch =>
    axios.post('/api/users/',
      {firstName, lastName, email, password})
      .then((user) => {
        user = user.data
        dispatch(login(user.email, user.password))
        console.log('butt')
      })

export default reducer