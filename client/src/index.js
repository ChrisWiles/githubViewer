import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router} from 'react-router'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './material_ui_raw_theme_file'
import injectTapEventPlugin from 'react-tap-event-plugin'

// import reducer from './reducers
import routes from './routes'

import './index.css'

injectTapEventPlugin()
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(e => e, reduxDevtools)

const Root = () => (
  <MuiThemeProvider muiTheme={theme}>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  </MuiThemeProvider>
)

render(<Root/>, document.getElementById('root'))
