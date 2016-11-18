import React from 'react'
import {GITHUB_ICON_POPOVER_TOGGLE, SET_GITHUB_ICON_POPOVER_ANCHOR} from '../constants/actionTypes'

/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

const initialState = {
  isOpen: false,
  anchorEl: <div></div>
}

function gitHubIconPopover(state = initialState, action) {

  switch (action.type) {
    case GITHUB_ICON_POPOVER_TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen
      }
    case SET_GITHUB_ICON_POPOVER_ANCHOR:
      return {
        ...state,
        anchorEl: action.anchorEl
      }
    default:
      return state
  }
}

export default gitHubIconPopover
