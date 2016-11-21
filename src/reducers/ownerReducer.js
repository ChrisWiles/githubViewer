import {
  OWNER_INFO_REQUEST,
  OWNER_INFO_SUCCESS,
  OWNER_INFO_FAILURE
} from '../constants/actionTypes'

const initialState = {
  loading: false,
  failed: false,
  owner: ''
}

function owner(state = initialState, action) {

  switch (action.type) {
    case OWNER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        failed: false,
        author: action.login
      }
    case OWNER_INFO_SUCCESS:
      return {
        ...state,
        loading: false
      }
    case OWNER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        failed: true
      }
    default:
      return state
  }
}

export default owner
