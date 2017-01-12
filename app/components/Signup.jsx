import React from 'react'
import {browserHistory} from 'react-router'

export const Signup = ({ signup }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    signup(evt.target.firstName.value, evt.target.lastName.value, evt.target.email.value, evt.target.password.value)
      browserHistory.push('/')
  } }>
    <input name="firstName" />
    <input name="lastName"  />
     <input name="email" />
    <input name="password" type="password" />
    <input type="submit" value="Signup" align='center'/>
  </form>
)

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signup},
) (Signup)
