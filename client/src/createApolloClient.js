// Apollo
import ApolloClient, {createNetworkInterface} from 'apollo-client'

// Auth
import {login} from './githubLogin'
import {username, password} from './config'


// Global.Auth
let TOKEN = null

login(username, password).then(token => {
  console.log('GitHub Token:', token)
  TOKEN = token
})
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

export default client
