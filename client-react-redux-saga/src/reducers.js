import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import login from './modules/auth/login/login.reducer'
import register from './modules/auth/register/register.reducer'
import auth from './modules/auth/auth.reducer'
import items from './modules/items/items.reducer'

import {reducer as reduxFormReducer} from 'redux-form'

export default combineReducers({routing: routerReducer, form: reduxFormReducer, register, auth, login, items})
