import React from 'react'
import {Route} from 'react-router'

import App from './containers/App'
// import Home from './components/Home'

export default (
  <Route path="/" component={App}>
    {/* Show the dashboard at / */}
    {/* <IndexRoute component={Home}/>
    <Route path="projects" component={Projects}/>
    <Route path="about" component={About}/>
    <Route path="/:org/:repoName" component={Repo}/> */}
  </Route>
)
