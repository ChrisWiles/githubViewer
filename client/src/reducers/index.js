import {combineReducers} from 'redux'
import {REPO_NAME, REPO_OWNER} from '../constants/actionTypes'

/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().

function repos(state = {repos: [], totalCount: 0}, action) {

  const repoNames = repos => repos.map(repo => repo.node.name)

  switch (action.type) {
    case REPO_NAME:
    let {edges, totalCount} = action.payload.data.repositoryOwner.repositories
      return {repos: repoNames(edges), totalCount}
    case REPO_OWNER:
      return action.payload.data
    default:
      return state
  }
}

const rootReducer = combineReducers({repos})

export default rootReducer
