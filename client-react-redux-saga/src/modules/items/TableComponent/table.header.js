import React, {Component} from 'react'

class TableHeader extends Component {
  componentDidMount () {
    this.setState({sortDirection: 1})
  }

  render () {
    const {column, handleGetItems} = this.props
    return <th value={column} onClick={() => {
      this.setState((prevState, props) => ({
        sortDirection: prevState.sortDirection * -1
      }))
      handleGetItems({sortField: column, sortDirection: this.state.sortDirection})
    }}>{this.props.children}</th>
  }
}

export default TableHeader
