import React, { Component } from 'react'

class Dashboard extends Component {
  renderContent () {
    return (
      <section className='row text-center placeholders'>
        <div className='col-6 col-sm-3 placeholder'>
          <img src='data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=' width='200' height='200' className='img-fluid rounded-circle' alt='Generic placeholder thumbnail' />
          <h4>Label</h4>
          <div className='text-muted'>Something else</div>
        </div>
        <div className='col-6 col-sm-3 placeholder'>
          <img src='data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=' width='200' height='200' className='img-fluid rounded-circle' alt='Generic placeholder thumbnail' />
          <h4>Label</h4>
          <span className='text-muted'>Something else</span>
        </div>
        <div className='col-6 col-sm-3 placeholder'>
          <img src='data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=' width='200' height='200' className='img-fluid rounded-circle' alt='Generic placeholder thumbnail' />
          <h4>Label</h4>
          <span className='text-muted'>Something else</span>
        </div>
        <div className='col-6 col-sm-3 placeholder'>
          <img src='data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=' width='200' height='200' className='img-fluid rounded-circle' alt='Generic placeholder thumbnail' />
          <h4>Label</h4>
          <span className='text-muted'>Something else</span>
        </div>
      </section>
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
