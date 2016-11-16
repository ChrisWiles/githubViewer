import React from 'react'
import {Route} from 'react-router'

import SmartApp from './containers/SmartApp'
// import Home from './components/Home'

export default (
  <Route path="/" component={SmartApp}>
    {/* Show the dashboard at / */}
    {/* <IndexRoute component={Home}/>
    <Route path="projects" component={Projects}/>
    <Route path="about" component={About}/>
    <Route path="/:org/:repoName" component={Repo}/> */}
  </Route>
)
