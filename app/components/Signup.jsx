import React from 'react'
import {browserHistory} from 'react-router'

export const Signup = ({ signup }) => (
  <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={evt => {
            evt.preventDefault()
            signup(evt.target.firstName.value, evt.target.lastName.value, evt.target.email.value, evt.target.password.value)
            browserHistory.push('/')
          } }>
            <div className="form-group">
              <label>First Name</label>
              <input
                name="firstName"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                name="lastName"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
                <label>password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
        <div className="or buffer">
          <div className="back-line">
            <span>OR</span>
          </div>
        </div>
        <div className="buffer oauth">
          <p>
            <a
              target="_self"
              href="/api/auth/google"
              className="btn btn-social btn-google">
              <i className="fa fa-google" />
              <span>Signup with Google</span>
            </a>
          </p>
          <p>
            <a
              target="_self"
              href="/api/auth/github"
              className="btn btn-social btn-github">
              <i className="fa fa-github" />
              <span>Signup with GitHub</span>
            </a>
          </p>
          <p>
            <a
              target="_self"
              href="/api/authå/twitter"
              className="btn btn-social btn-twitter">
              <i className="fa fa-twitter" />
              <span>Signup with Twitter</span>
            </a>
          </p>
        </div>
      </div>
)

import {signup} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signup},
) (Signup)