import React, {Component} from 'react'

/* i18n is defined in webpack configuration */
/* global i18n */
/* eslint no-undef: "error" */

class Test extends Component {
  renderContent () {
    return (
      <div className='container'>
        <h1>i18n</h1>
        <h2>Usage</h2>
        <p>We are using webpack plugin <a target='_blank' href='https://github.com/webpack/webpack/tree/master/examples/i18n'>Github -> i18n</a></p>
        <p>Files are located in <code>`/src/locales/`</code> for example <code>`/src/locales/pl.json`</code></p>
        <p>Configuration of this plugin in the webpack can be found <code>`/webpack/development/webpack.config.js`</code></p>
        <h2>Test</h2>
        <p><b>`{`i18n("Hello World")`}`</b>: <code>{i18n('Hello World')}</code></p>
        <h1>Environent Variables Test</h1>
        <p>We are using webpack plugin <a target='_blank' href='https://webpack.js.org/plugins/define-plugin/'>definePlugin</a></p>
        <p>All configurations for webpack are in the folder <code>`/webpack/development`</code></p>
        <div><b>NODE_ENV</b>: <code>{process.env.NODE_ENV}</code></div>
        <div><b>MYTEST</b>: <code>{process.env.MYTEST}</code></div>
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

// function mapStateToProps(state) {   return { content: state.auth.content }; }
// export default connect(mapStateToProps, actions)(Dashboard);

export default Test
