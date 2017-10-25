import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { isAuthenticated, getDecodedToken } from '../modules/auth/auth.store.selector'
import { unsetAuth } from '../modules/auth/auth.actions'

const Header = (props) => {
  const { authenticated, name } = props
  return ( // Later to cleanup below with <li's>
    <div className='masthead'>
      <nav className='navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse'>
        <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <a className='navbar-brand' href='#'>Marcin Polak's Test App</a>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav mr-auto'>
            {!authenticated && <li className={classNames('nav-item', { active: props.url === '/register' })}>
              <Link className='nav-link' to='/register'>Register</Link>
            </li> }
            {!authenticated && <li className={classNames('nav-item', { active: props.url === '/login' })}>
              <Link className='nav-link' to='/login'>Login</Link>
            </li> }
            {authenticated && <li className={classNames('nav-item', { active: props.url === '/dashboard' })}>
              <Link className='nav-link' to='/dashboard'>Dashboard</Link>
            </li> }
            <li className={classNames('nav-item', { active: props.url === '/healthcheck' })}>
              <Link className='nav-link' to='/healthcheck'>System Check</Link>
            </li>
          </ul>
          {authenticated && <ul className='nav navbar-nav navbar-right'>
            <li className='float-right'>
              <Link className='nav-link' to='/dashboard'>LoggedIn: {name}</Link>
            </li>
            <li className='float-right'>
              <Link className='nav-link' to='#' onClick={props.unsetAuth}>Logout</Link>
            </li>
          </ul> }
        </div>
      </nav>
    </div>
  )
}

Header.propTypes = {
  url: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
  name: PropTypes.string
}

const mapStateToProps = (state) => {
  // console.log(state)
  let decodedToken = getDecodedToken(state)
  return {
    url: state.routing.location.pathname,
    authenticated: isAuthenticated(state),
    // When registering there is an empty name so we use email instead
    name: decodedToken ? (decodedToken.name ? decodedToken.name : decodedToken.email) : undefined
  }
}

export default connect(mapStateToProps, { unsetAuth })(Header)
