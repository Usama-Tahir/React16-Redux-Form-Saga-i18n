/**
 * Config Helper
 */

import config from './config'

let apiUrl = `${config.api.url}:${config.api.port}/users`

export {
    apiUrl
}
