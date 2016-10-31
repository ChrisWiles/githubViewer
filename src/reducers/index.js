import {combineReducers} from 'redux'

/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().

const rootReducer = combineReducers()

export default rootReducer
