import {ITEMS_FETCH, ITEM_DELETE} from './items.action'

const initalState = {data: [], query: {sortDirection: 1, sortField: null, search: ''}, error: null}

// const update = (state, mutations) =>
//   Object.assign({}, state, mutations)

export default function reducer (state = initalState, action = {}) {
  switch (action.type) {
    case ITEMS_FETCH.REQUEST:
      return {
        ...state,
        query: Object.assign({}, state.query, action.payload),
        error: null
      }
    case ITEMS_FETCH.SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null
      }
    case ITEMS_FETCH.FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    case ITEM_DELETE.SUCCESS:
      // return Object.assign({}, state, {
      //   data: action.filter
      // })

      return {
        ...state,
        data: {...state.data, docs: state.data.docs.filter(({ _id }) => _id !== action.payload._id)}
      }
    default:
      return state
  }
}
