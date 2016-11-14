import React from 'react'
import {render} from 'react-dom'
import {browserHistory, Router} from 'react-router'
import {createStore} from 'redux'
import {ApolloProvider} from 'react-apollo'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './material_ui_raw_theme_file'
import injectTapEventPlugin from 'react-tap-event-plugin'

// import reducer from './reducers
import routes from './routes'
import rootReducer from './reducers'

import client from './createApolloClient'

import './index.css'

injectTapEventPlugin()
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, reduxDevtools)

const Root = () => (
  <MuiThemeProvider muiTheme={theme}>
    <ApolloProvider store={store} client={client}>
      <Router history={browserHistory} routes={routes} />
    </ApolloProvider>
  </MuiThemeProvider>
)

render(<Root/>, document.getElementById('root'))
