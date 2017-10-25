import jwtDecode from 'jwt-decode'
export const isAuthenticated = (state) => {
  return !!state.auth.token
}

export const getDecodedToken = (state) => {
    // console.log(state)
  if (!state.auth.token) {
    return null
  }
  return jwtDecode(state.auth.token)
}
