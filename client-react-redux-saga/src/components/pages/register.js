import React, {Component} from 'react'
import RegisterForm from '../../modules/auth/register/register.form'

class Register extends Component {
  render () {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Register</h1>
          <p className='lead'>This is example of Register / Sign up page.</p>
          <p><a className='btn btn-lg btn-success' href='#' role='button'>More information</a></p>
        </div>
        <RegisterForm />
      </div>
    )
  }
}

export default Register
