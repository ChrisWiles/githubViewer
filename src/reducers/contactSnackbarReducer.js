import {CONTACT_SNACK_BAR_TOGGLE} from '../constants/actionTypes'
/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

const initialState = {
  contactSnackbarisOpen: false
}

function contactSnackbar(state = initialState, action) {

  switch (action.type) {
    case CONTACT_SNACK_BAR_TOGGLE:
      return {
        contactSnackbarisOpen: !state.contactSnackbarisOpen
      }
    default:
      return state
  }
}

export default contactSnackbar
