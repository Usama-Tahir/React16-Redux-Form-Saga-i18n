import { AUTH_SET, AUTH_UNSET } from './auth.constants'
import localStorage from '../../lib/localStorage'

const initialSate = {
  token: localStorage.getItem('token'),
  refreshToken: localStorage.getItem('refreshToken')
}

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case AUTH_SET:
      return {
        token: action.token,
        refreshToken: action.refreshToken
      }
    case AUTH_UNSET:
      return {
        token: null,
        refreshToken: null
      }
    default:
      return state
  }
}

export default reducer
