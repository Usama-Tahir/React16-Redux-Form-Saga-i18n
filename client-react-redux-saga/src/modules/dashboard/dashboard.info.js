import React, { Component } from 'react'

class Dashboard extends Component {
  renderContent () {
    return (
      <div>
        <h1>Info</h1>
        <p>Some information here from info</p>

      </div>
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
