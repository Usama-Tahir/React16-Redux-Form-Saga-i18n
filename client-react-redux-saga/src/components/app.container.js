import React, {Component} from 'react'

import './app.css'
import Header from './header'
import Footer from './footer'
import Page from './page.container'

class App extends Component {
  render () {
    return (
      <Page>
        <Header />
        <div >
          {this.props.children}
        </div>
        <Footer />
      </Page>
    )
  }
}

// When I use connect here it immediately reload the page
export default App
