import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import ItemsList from './items.list'
import Item from './item'

import { ITEMS_FETCH, ITEM_DELETE } from './items.action'
import { getError, getItems, getClient } from './items.reducer.selectors'

// const fireAction = (e) => { console.log(e) }

class ItemsContainer extends Component {
  componentWillMount () {
    this.props.itemsGet()
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    const {items, error, itemDelete} = this.props
    return (
      <div> {items && items.docs && <p>Records: {items.total}, Pages: {items.pages}</p>}
        <ItemsList title='My Items'>
          {items && items.docs && items.docs.map(item =>
            <Item
              key={item._id}
              id={item._id}
              email={item.email}
              username={item.username}
              name={item.name}
              admin={item.admin}
              updatedAt={item.updated_at}
              onActionClicked={() => itemDelete(item)} />
          )}
        </ItemsList>
        <div className='row'>
          {error && <div className='bg-danger text-white'>{error}</div>}
        </div>
      </div>
    )
  }
}

// <button onClick={this.onClick}>Run</button>

ItemsContainer.propTypes = {
  // data
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    admin: PropTypes.bool.isRequired
  }))
}

const mapStateToProps = state => ({
  error: getError(state),
  items: getItems(state),
  client: getClient(state)
})

export default connect(
    mapStateToProps,
    { itemsGet: ITEMS_FETCH.request, itemDelete: ITEM_DELETE.request }
  )(ItemsContainer)
