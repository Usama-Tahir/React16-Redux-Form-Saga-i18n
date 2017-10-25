import React from 'react'
import PropTypes from 'prop-types'

const Item = ({ id, email, username, name, admin, updatedAt, onActionClicked }) => (
  <tr>
    <td><small className='small'>{id}</small></td>
    <td><a href='mailto:{email}'>{email}</a> <br /> {username}</td>
    <td>{name}</td>
    <td>{admin}</td>
    <td>{updatedAt}</td>
    <td><a href='#'>Edit</a> <a href='#' onClick={onActionClicked}>Delete</a></td>
  </tr>
)

Item.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  admin: PropTypes.bool.isRequired
}

export default Item
