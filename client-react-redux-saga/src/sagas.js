import formActionSaga from 'redux-form-saga'

import authSaga from './modules/auth/auth.saga'
import loginSaga from './modules/auth/login/login.saga'
import registerSaga from './modules/auth/register/register.saga'

import itemsSaga from './modules/items/items.saga'

const sagas = [formActionSaga, authSaga, loginSaga, registerSaga, itemsSaga]

export default sagas
