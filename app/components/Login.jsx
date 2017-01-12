import React from 'react'
import {browserHistory} from 'react-router'

export const Login = ({ login }) => (
 <div className="signin-container">
        <div className="buffer local">
          <form onSubmit={evt => {
            evt.preventDefault()
            login(evt.target.email.value, evt.target.password.value)
            browserHistory.push('/')
          } }>
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
              <span>Login with Google</span>
            </a>
          </p>
          <p>
            <a
              target="_self"
              href="/api/auth/github"
              className="btn btn-social btn-github">
              <i className="fa fa-github" />
              <span>Login with GitHub</span>
            </a>
          </p>
          <p>
            <a
              target="_self"
              href="/api/authå/twitter"
              className="btn btn-social btn-twitter">
              <i className="fa fa-twitter" />
              <span>Login with Twitter</span>
            </a>
          </p>
        </div>
      </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)


