import { all, put, call, takeLatest, fork } from 'redux-saga/effects'

import api from './items.api'

// Redux actions
import { ITEMS_FETCH, ITEM_DELETE } from './items.action'

/**
 * Fetch Items Saga Function
 * @param  {object} action
 */

export function * fetchItemsAsync (action) {
  try {
    const items = yield call(api.getItems, action.payload)
    yield put(ITEMS_FETCH.success(items.data))
  } catch (e) {
    yield put(ITEM_DELETE.failure(e))
  }
  // failed
  // yield put(ITEMS_FETCH.failure({error:'There was an error during request.'}))
}

export function * deleteItemAsync (action) {
  try {
    yield call(api.deleteItem, action.payload._id)
    yield put(ITEM_DELETE.success(action.payload))
  } catch (e) {
    yield put(ITEM_DELETE.failure(e))
  }
  // failed
  // yield put(ITEMS_FETCH.failure({error:'There was an error during request.'}))
}

/**
 * Watch Fetch Items
 */

export function * watchFetchItems () {
  yield takeLatest(ITEMS_FETCH.REQUEST, fetchItemsAsync)
}

export function * watchDeleteItem () {
  yield takeLatest(ITEM_DELETE.REQUEST, deleteItemAsync)
}

/**
 * Root Saga Function
 */

export default function * rootSaga () {
  yield all([fork(watchFetchItems), fork(watchDeleteItem)])
}
