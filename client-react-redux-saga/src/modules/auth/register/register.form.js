import React from 'react'
import { Field, reduxForm } from 'redux-form'

// Validation

import { required, email } from '../../common/form/validation'
import inputField from '../../common/form/fields/input.field'

// Redux Actions

import { USER_REGISTER } from './register.action'

// Form Definition

const RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props

  const submit = handleSubmit(USER_REGISTER)

  return (
    <form onSubmit={submit}>
      <Field
        name='email'
        type='email'
        component={inputField}
        label='Email'
        validate={[email, required]} />
      <Field
        name='username'
        type='text'
        component={inputField}
        label='Username'
        validate={[required]} />
      <Field
        name='password'
        type='password'
        component={inputField}
        label='Password'
        validate={[required]} />
      <div>
        <button className='btn btn-primary' type='submit' disabled={submitting}>Register</button>
        <button
          className='btn btn-secondary'
          type='button'
          disabled={pristine || submitting}
          onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'RegisterForm',
  initialValues: {email: 'mapoart@gmail.com', password: 'mypassword', username: 'mapoart'} // for development !!!!
})(RegisterForm)
