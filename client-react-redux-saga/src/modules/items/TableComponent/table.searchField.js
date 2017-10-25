import React, {Component} from 'react'

class TableSearchField extends Component {
  componentDidMount () {
    this.setState({search: ''})
  }

  render () {
    const {handleGetItems} = this.props
    return <input onChange={(e) => { handleGetItems({search: e.target.value}) }} />
  }
}

export default TableSearchField
