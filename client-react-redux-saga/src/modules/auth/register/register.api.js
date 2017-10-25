import { apiUrl } from '../../../config'

import axios from 'axios'

const api = {
/**
 * Remember !! for production ALWAYS USE https connection.
 */
  register (email, password, username = null) {
    return axios.post(apiUrl + '/register', {
      email: email,
      password: password,
      username: username
    })
  }
}

export default api
