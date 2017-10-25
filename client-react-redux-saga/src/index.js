import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './public/index.css'
import createStoreWithMiddleware from './store'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import { Route, Switch } from 'react-router'

import PageNotFound from './components/pages/404'
import HomePage from './components/pages/home'
import Register from './components/pages/register'
import Login from './components/pages/login'
import HealthCheck from './components/pages/healthcheck'
import Dashboard from './components/pages/dashboard'
import App from './components/app.container'

import RequireAuth from './modules/auth/auth.function'
import { unsetAuth, refreshToken } from './modules/auth/auth.actions'
import {isTokenExpired} from './modules/auth/auth.helper'

import localStorage from './lib/localStorage'

import 'bootstrap/dist/css/bootstrap.css'

import axios from 'axios'

const initialState = {}
const history = createHistory()
const store = createStoreWithMiddleware(initialState, history)

let token = localStorage.getItem('token')
let rtoken = localStorage.getItem('refreshToken')
// console.log('token: ' + token)
// console.log('RTOKEN: ' + rtoken)
// Sometimes there is an error showing Invalid token specified: Cannot read property 'replace' of undefined
// This is because one of the tokens is invalid
try {
  if (!isTokenExpired(token)) {
    console.log('token is not expired: ' + token)

    // We refresh token on each refresh of the application in the browser
    store.dispatch(refreshToken(rtoken))
    token = localStorage.getItem('token')
    // Set default autorized Headers for axios for all requests.
    axios.defaults.headers.common = {
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/json'
    }
  } else {
    store.dispatch(unsetAuth())
  }
} catch (e) {
  console.log(e)
}

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={RequireAuth(Dashboard)} />
          <Route path='/healthcheck' component={HealthCheck} />
          <Route component={PageNotFound} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
