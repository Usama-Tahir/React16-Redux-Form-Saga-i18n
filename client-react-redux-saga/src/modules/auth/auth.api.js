import { apiUrl } from '../../config'
import axios from 'axios'

const api = {
  refreshToken (refreshToken) {
    if (!refreshToken) {
      console.log('Token must be provided to the api call refreshToken. file auth.api.js')
      return false
    }
    var config = {
      headers: {'Authorization': 'Bearer ' + refreshToken}
    }

    return axios.get(apiUrl + '/refreshToken', config)
  }
}

export default api
