import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { ITEMS_FETCH } from './items.action'
import { connect } from 'react-redux'
import TableHeader from './TableComponent/table.header'
import TableSearchField from './TableComponent/table.searchField'

class ItemsList extends Component {
  handleGetItems (criteria) {
    this.props.itemsGet(criteria)
  }

  onChange () {
    this.setState((prevState, props) => ({
      sortDirection: prevState.sortDirection * -1
    }))
  }

  render () {
    const {itemsGet} = this.props
    return (
      <div className='table-responsive'>
        <h2>{this.props.title}</h2>
        <TableSearchField handleGetItems={itemsGet} />
        <table className='table table-striped'>
          <thead>
            <tr>
              <TableHeader column='_id' handleGetItems={itemsGet}>#</TableHeader>
              <TableHeader column='email' handleGetItems={itemsGet}>Email</TableHeader>
              <TableHeader column='name' handleGetItems={itemsGet}>Name</TableHeader>
              <TableHeader column='admin' handleGetItems={itemsGet}>Admin</TableHeader>
              <TableHeader column='updated_at' handleGetItems={itemsGet}>Updated</TableHeader>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.children}
          </tbody>
        </table>
      </div>)
  }
}

ItemsList.propTypes = {
  title: PropTypes.string.isRequired,
  nodes: PropTypes.node
}

export default connect(
  null,
  { itemsGet: ITEMS_FETCH.request }
)(ItemsList)
