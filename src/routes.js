import React from 'react'
import {Route} from 'react-router'

import SmartApp from './containers/SmartApp'
import SmartRepositoryPage from './containers/SmartRepositoryPage'
import SmartOwnerPage from './containers/SmartOwnerPage'

export default (
  <Route path="/" component={SmartApp}>

    {/* <IndexRoute component={Home}/>*/}
    <Route path="/:user" component={SmartOwnerPage}/>
    <Route path="/:org/:repoName" component={SmartRepositoryPage}/>
  </Route>
)
