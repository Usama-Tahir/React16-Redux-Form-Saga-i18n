import {Component} from 'react'

class Page extends Component {
  render () {
    // this component can be used to render some elements on each page.
    // For now is not necessary
    return this.props.children
  }
}

export default Page
