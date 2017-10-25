import { createFormAction } from 'redux-form-saga'

/**
* We use 'redux-form-saga' to create actions like:
* LOGIN.REQUEST, LOGIN.SUCCESS, LOGIN.FAILURE
* but also LOGIN.request(), LOGIN.success(), LOGIN.failure()
* functions. as per: https://github.com/mhssmnn/redux-form-saga
* eg. LOGIN.request(payload) === { type: 'LOGIN_REQUEST', payload };
*/
const LOGIN = createFormAction('LOGIN')

export {
  LOGIN
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
