import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// Validation

import { required, email } from '../../common/form/validation'
import inputField from '../../common/form/fields/input.field'

// Redux Actions

import { LOGIN } from './login.action'

// Form Definition
/* i18n is defined in webpack configuration */
/* global i18n */
/* eslint no-undef: "error" */

const LoginForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, error } = props

  return (
    <form onSubmit={handleSubmit(LOGIN)}>
      <Field
        autoFocus
        name='email'
        type='email'
        component={inputField}
        label={i18n('Email')}
        validate={[required, email]} />
      <Field
        name='password'
        type='password'
        component={inputField}
        label={i18n('Password')}
        validate={[required]} />
      <a href='/forgottenpassword'>Forgotten Password</a>
      <hr />
      {error && <div><strong className='alert alert-danger'>{error}</strong><hr /></div>}
      <div>
        <button className='btn btn-primary' type='submit' disabled={submitting}>{i18n('Login')}</button>
        <button
          className='btn btn-secondary'
          type='button'
          disabled={pristine || submitting}
          onClick={reset}>{i18n('Clear Values')}</button>
      </div>
    </form>
  )
}

let InitializeFromStateForm = reduxForm({ form: 'LoginForm' })(LoginForm)

export default connect(
  state => ({
    initialValues: { email: 'mapoart@gmail.com', password: 'mypassword' } // for development !!!!
    // initialValues: state.account.data // pull initial values from account reducer
  })
)(InitializeFromStateForm)
