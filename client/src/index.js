import React, {Component} from 'react'
import {render} from 'react-dom'
import {browserHistory, Router} from 'react-router'
import {createStore, combineReducers} from 'redux'
import {ApolloProvider} from 'react-apollo'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from './material_ui_raw_theme_file'
import injectTapEventPlugin from 'react-tap-event-plugin'

import routes from './routes'


// Apollo
import ApolloClient, {createNetworkInterface} from 'apollo-client'

// Auth
import {login} from './githubLogin'
import {username, password} from './config'

import './index.css'

// Global.Auth
let TOKEN = null


// Global.Apollo
const URI = {uri: 'https://api.github.com/graphql'}
const networkInterface = createNetworkInterface(URI)

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {} // Create the header object if needed.
      }

      // Send the login token in the Authorization header
      req.options.headers.authorization = `Bearer ${TOKEN}`
      next()
    }
  }
])

const client = new ApolloClient({networkInterface})

const rootReducer = combineReducers({apollo: client.reducer()})

injectTapEventPlugin()
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootReducer, reduxDevtools)

class Root extends Component {

  state = {login: false}

  componentDidMount() {
    login(username, password).then(token => {
      console.log('GitHub Token:', token)
      TOKEN = token
      this.setState({login: true})
    })
  }

  render() {
    return this.state.login ? (
      <MuiThemeProvider muiTheme={theme}>
        <ApolloProvider store={store} client={client}>
          <Router history={browserHistory} routes={routes} />
        </ApolloProvider>
      </MuiThemeProvider>
    ) : <h1>Logging in...</h1>
  }
}


render(<Root/>, document.getElementById('root'))
