import './index.css'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React from 'react'
import rootReducer from './reducers'
import routes from './routes'
import theme from './material_ui_raw_theme_file'
import thunkMiddleware from 'redux-thunk'
import {browserHistory, Router} from 'react-router'
import {createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import {render} from 'react-dom'


injectTapEventPlugin()

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  rootReducer,
  reduxDevtools,
  applyMiddleware(
    thunkMiddleware
  )
)

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={theme}>
      <Router history={browserHistory} routes={routes}/>
    </MuiThemeProvider>
  </Provider>
)

render(<Root/>, document.getElementById('root'))
