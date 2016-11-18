import {
  OWNER_INFO_REQUEST,
  OWNER_INFO_SUCCESS,
  OWNER_INFO_FAILURE
} from '../constants/actionTypes'

const initialState = {}

function owner(state = initialState, action) {

  switch (action.type) {
    case OWNER_INFO_REQUEST:
      return {
        ...state
      }
    case OWNER_INFO_SUCCESS:
      return {
        ...state
      }
    case OWNER_INFO_FAILURE:
      return {
        ...state
      }
    default:
      return state
  }
}

export default owner
