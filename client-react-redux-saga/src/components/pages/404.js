import React, { Component } from 'react'

/* i18n is defined in webpack configuration */
/* global i18n */
/* eslint no-undef: "error" */

class NotFoundPage extends Component {
  render () {
    return (
      <div className='container'>
        <h1>404 - {i18n('Page Not Found')}</h1>
        <p>{i18n('I\'m sorry, the page you were looking for cannot be found!')}</p>
      </div>
    )
  }
}
export default NotFoundPage
