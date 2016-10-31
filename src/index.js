import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// import reducer from './reducers'
import App from './containers/App'
import './index.css'

injectTapEventPlugin()

const store = createStore(e => e)

const Root = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>
)

render(
  <Root/>, document.getElementById('root')
)
