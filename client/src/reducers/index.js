import {combineReducers} from 'redux'
import repos from './repoReducer'
import login from './loginReducer'
import ui from './UIReducer'
import contactSnackbar from './contactSnackbarReducer'
import owner from './ownerReducer'

// Combines multiple reducers into a single reducing function with each reducer as a
// key/value pair. Can then be passed to createStore().
const rootReducer = combineReducers({repos, login, ui, contactSnackbar, owner})

export default rootReducer
