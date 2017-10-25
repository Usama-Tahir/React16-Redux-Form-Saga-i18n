import React, { Component } from 'react'
import DashboardNav from './dashboard.nav'
import DashboardOverview from './dashboard.overview'
import DashboardPagination from './dashboard.pagination'
import DashboardInfo from './dashboard.info'
import { Route } from 'react-router'
class DashboardContainer extends Component {
  render () {
    return (
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <DashboardNav />
            <main className='col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3'>
              <h1>Dashboard</h1>
              <Route exact path='/dashboard' component={DashboardOverview} />
              <Route path='/dashboard/pagination' component={DashboardPagination} />
              <Route path='/dashboard/info' component={DashboardInfo} />
            </main>
          </div>
        </div>

      </div>
    )
  }
}

// When I use connect from react here it immediately reload the page
export default DashboardContainer
