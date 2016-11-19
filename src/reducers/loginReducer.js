import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../constants/actionTypes'

/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

const initialState = {
  isLoggedIn: false,
  loginFailure: false,
  isLoggingIn: false
}

function login(state = initialState, action) {

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginFailure: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        loginFailure: true
      }
    default:
      return state
  }
}

export default login
