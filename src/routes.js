import React from 'react'
import {Route} from 'react-router'

import SmartApp from './containers/SmartApp'
import SmartRepositoryPage from './containers/SmartRepositoryPage'
// import SmartAuthorPage from './containers/SmartAuthorPage'

const Name = () => <h1>name</h1>

export default (
  <Route path="/" component={SmartApp}>

    {/* <IndexRoute component={Home}/>*/}
    <Route path="/:user" component={Name}/>
    <Route path="/:org/:repoName" component={SmartRepositoryPage}/>
  </Route>
)
