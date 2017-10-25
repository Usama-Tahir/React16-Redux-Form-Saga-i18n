import { apiUrl } from '../../config'

import axios from 'axios'

function toQueryString (obj) {
  var parts = []
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
    }
  }
  return parts.join('&')
}

const api = {
  getItems (query) {
    var queryString = query ? ('?' + toQueryString(query)) : ''
    return axios.get(apiUrl + queryString)
  },
  deleteItem (item) {
    return axios.delete(apiUrl + '/user/' + item)
  }
}

export default api
