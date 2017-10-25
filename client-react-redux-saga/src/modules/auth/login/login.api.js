import { apiUrl } from '../../../config'

import axios from 'axios'

const api = {
/**
 * Remember !! for production ALWAYS USE https connection.
 */
  login (email, password) {
    return axios.post(apiUrl + '/login', {
      email: email,
      password: password
    })
  }
}

export default api
