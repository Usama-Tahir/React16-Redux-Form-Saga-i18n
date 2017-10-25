import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const DashboardNav = (props) => {
  return (
    <nav className='col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar'>
      <ul className='nav nav-pills flex-column'>
        <li className='nav-item'>
          <Link className={classNames('nav-link', { active: props.url === '/dashboard' })} to='/dashboard'>Overview</Link>
        </li>
        <li className='nav-item'>
          <Link className={classNames('nav-link', { active: props.url === '/dashboard/pagination' })} to='/dashboard/pagination'>Pagination</Link>
        </li>
      </ul>
      <ul className='nav nav-pills flex-column'>
        <li className='nav-item'>
          <Link className={classNames('nav-link', { active: props.url === '/dashboard/info' })} to='/dashboard/info'>More Information</Link>
        </li>
      </ul>
    </nav>
  )
}

DashboardNav.propTypes = {
  url: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    url: state.routing.location.pathname
  }
}

export default connect(mapStateToProps)(DashboardNav)
