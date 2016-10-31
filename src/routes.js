import App from './containers/App'
import Home from './components/Home.jsx'

const routes = {
  // base component (wrapper for the whole application).
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Home
    }
  ]
}

export default routes
