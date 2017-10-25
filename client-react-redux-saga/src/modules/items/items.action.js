import { createFormAction } from 'redux-form-saga'

/**
* We use 'redux-form-saga' to create actions like:
* ITEMS_FETCH.REQUEST, ITEMS_FETCH.SUCCESS, ITEMS_FETCH.FAILURE
* but also ITEMS_FETCH.request(), ITEMS_FETCH.success(), ITEMS_FETCH.failure()
* functions. as per: https://github.com/mhssmnn/redux-form-saga
* eg. ITEMS_FETCH.request(payload) === { type: 'ITEMS_FETCH_REQUEST', payload };
*/
const ITEMS_FETCH = createFormAction('ITEMS_FETCH')
const ITEM_DELETE = createFormAction('ITEM_DELETE')

export {
    ITEMS_FETCH,
    ITEM_DELETE
}

/**
 * I saw another way of making actions using Array.reduce function like
 * Redux-Saga examples
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
