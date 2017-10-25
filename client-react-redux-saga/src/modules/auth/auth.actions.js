import { AUTH_SET, AUTH_UNSET, REFRESH_TOKEN } from './auth.constants'
import localStorage from '../../lib/localStorage'

export const setAuth = (token, refreshToken) => {
  localStorage.setItem('token', token)
  localStorage.setItem('refreshToken', refreshToken)

  return {
    type: AUTH_SET,
    token,
    refreshToken
  }
}

export const unsetAuth = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refreshToken')
  return {
    type: AUTH_UNSET
  }
}

export const refreshToken = (refreshToken) => {
  return {
    type: REFRESH_TOKEN,
    refreshToken
  }
}
