import React, { Component } from 'react'

import ItemsContainer from '../../modules/items/items.container'

class Dashboard extends Component {
  renderContent () {
    return (
      <div><ItemsContainer /></div>
    )
  }

  render () {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default Dashboard
