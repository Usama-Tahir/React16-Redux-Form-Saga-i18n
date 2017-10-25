import decode from 'jwt-decode'

export const getTokenExpirationDate = (encodedToken) => {
  if (!encodedToken) {
    return undefined
  }

  const token = decode(encodedToken)
  if (!token.exp) { return null }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

export const isTokenExpired = (token) => {
  if (!token) {
    return true
  }

  const expirationDate = getTokenExpirationDate(token)
  return expirationDate < new Date()
}
