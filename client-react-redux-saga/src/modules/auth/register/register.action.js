import { createFormAction } from 'redux-form-saga'

/**
* We use 'redux-form-saga' to create action types like:
* USER_REGISTER.REQUEST, USER_REGISTER.SUCCESS, USER_REGISTER.FAILURE
* but also USER_REGISTER.request(), USER_REGISTER.success(), USER_REGISTER.failure()
* functions. as per: https://github.com/mhssmnn/redux-form-saga
* eg. USER_REGISTER.request(payload) === { type: 'USER_REGISTER_REQUEST', payload };
*/
const USER_REGISTER = createFormAction('USER_REGISTER')

export {
    USER_REGISTER
}

/**
 * I saw another way of making actions using Array.reduce function like
 * Redux-Saga Examples
 * const REQUEST = 'REQUEST'
 * const SUCCESS = 'SUCCESS'
 * const FAILURE = 'FAILURE'
 *
 * function createRequestTypes(base) {
 *   return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
 *                acc[type] = `${base}_${type}`
 *                return acc
 *          }, {})
}

function action(type, payload = {}) {
  return {type, ...payload}
}

export const USER = createRequestTypes('USER')

export const user = {
  request: login => action(USER[REQUEST], {login}),
  success: (login, response) => action(USER[SUCCESS], {login, response}),
  failure: (login, error) => action(USER[FAILURE], {login, error}),
}
 */
