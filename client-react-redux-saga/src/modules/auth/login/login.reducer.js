// import { LOGIN } from './login.action'
// import localStorage from '../../../lib/localStorage'

const initialSate = {

  // id: null,
  // token: localStorage.getItem('token'),
  // name: 'Marcin Polak' // for testing the code purposes
}

const reducer = (state = initialSate, action) => {
  // Login reducer is based on redux-form, all functions are there
  // However here you can add more reducer actions.
  // switch (action.type) {
  //   case LOGIN.REQUEST:
  //     return {
  //       ...state,
  //       req: true,
  //       suc: false,
  //       messages: [{message: 'Logging in...', datetime: new Date()}],
  //       errors: [],
  //       user: action.payload
  //     }
  //   case LOGIN.SUCCESS:
  //     return {
  //       ...state,
  //       req: false,
  //       suc: true,
  //       messages: [],
  //       errors: [],
  //       user: null,
  //       token: action.payload.data.token,
  //       client: action.payload.data
  //     }
  //   case LOGIN.FAILURE:
  //     return {
  //       ...state,
  //       req: false,
  //       suc: false,
  //       messages: [],
  //       errors: [],
  //       user: null,
  //       token: null,
  //       error: action.payload.message
  //     }
  // }
  return state
}

export default reducer
