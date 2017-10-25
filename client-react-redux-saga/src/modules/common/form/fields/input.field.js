import React from 'react'

const inputField = ({
    input,
    label,
    type,
    meta: {
        touched,
        error,
        warning
    }
}) => (
  <div className='form-group'>
    <label>{label}</label>
    <div>
      <input className='form-control' {...input} placeholder={label} type={type} /> {touched && ((error && <div className='alert alert-danger'>{error}</div>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export default inputField
