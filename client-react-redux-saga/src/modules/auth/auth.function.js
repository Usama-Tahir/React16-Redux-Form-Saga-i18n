import React, { Component } from 'react'
import { connect } from 'react-redux'

import { push } from 'react-router-redux'

import {isAuthenticated} from './auth.store.selector'

export default function (PrivateComponent) {
  class Authentication extends Component {
    componentDidCatch (error, info) {
      // Display fallback UI
      // this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      console.log(error, info)
    }

    componentWillMount () {
      if (!this.props.authenticated) {
        this.props.dispatch(push('/login'))
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.props.dispatch(push('/login'))
      }
    }

    render () {
      return <PrivateComponent {...this.props} />
    }
  }

  function mapStateToProps (state) {
    return { authenticated: isAuthenticated(state) }
  }

  return connect(mapStateToProps)(Authentication)
}
