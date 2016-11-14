import React from 'react'
import {TOKEN} from '../createApolloClient'
import App from '../containers/App'


// class Home extends Component {
//   state = {
//     login: false
//   }
//
// }
const Home = () => {
  if(TOKEN) {
    return <App/>
  } else {
    return <h1>Logging in...</h1>
  }
}

export default Home
