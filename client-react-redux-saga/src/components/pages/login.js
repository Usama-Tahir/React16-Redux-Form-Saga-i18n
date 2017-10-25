import React, {Component} from 'react'
import LoginForm from '../../modules/auth/login/login.form'

class Login extends Component {
  render () {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Login</h1>
          <p className='lead'>This is example of Login page.</p>
          <p><a className='btn btn-lg btn-success' href='#' role='button'>More information</a></p>
        </div>
        <LoginForm />
      </div>
    )
  }
}

export default Login
