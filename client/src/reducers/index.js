import {combineReducers} from 'redux'
import {REPO_NAME, REPO_OWNER, RESET_SEARCH} from '../constants/actionTypes'

/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

const initialState = {
  repos: [],
  totalCount: 0
}

function repos(state = initialState, action) {

  const repoNames = repos => repos.map(repo => repo.node.name)

  switch (action.type) {
    case REPO_NAME:
    let {edges, totalCount} = action.payload.data.repositoryOwner.repositories
      return {repos: repoNames(edges), totalCount}
    case REPO_OWNER:
      return action.payload.data
    case RESET_SEARCH:
      return initialState
    default:
      return state
  }
}

// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().
const rootReducer = combineReducers({repos})

export default rootReducer
