import React from 'react'
import {Route} from 'react-router'

import App from './containers/App'

export default (
  <Route path="/" component={App}>
    {/* Show the dashboard at / */}
    {/* <IndexRoute component={Home}/>
    <Route path="projects" component={Projects}/>
    <Route path="about" component={About}/>
    <Route path="info" component={Info}/> */}
  </Route>
)
