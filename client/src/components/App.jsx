import React, {PropTypes} from 'react'
import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'
import SmartLogin from '../containers/SmartLogin'

const App = ({children, setNavBarTitle, isSlideDrawerOpen, isLoggingIn, toggleSlideDrawer, requestLogin, navTitle, isLoggedIn}) => (
  <div>
    <NavBar
      handleToggle={toggleSlideDrawer}
      handleLogin={requestLogin}
      title={navTitle}
      isLogin={isLoggedIn}
      isLoggingIn={isLoggingIn}
    />
    <SlideDrawer
      handleToggle={toggleSlideDrawer}
      open={isSlideDrawerOpen}
      setTitle={setNavBarTitle}
    />
    {/* child component will be rendered here */}
    {isLoggedIn ? children : <SmartLogin/>}
  </div>
)

App.propTypes = {
  children: PropTypes.node,
  isLoggedIn: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  isSlideDrawerOpen: PropTypes.bool.isRequired,
  loginFailure: PropTypes.bool.isRequired,
  navTitle: PropTypes.string.isRequired,
  requestLogin: PropTypes.func.isRequired,
  setNavBarTitle: PropTypes.func.isRequired,
  toggleSlideDrawer: PropTypes.func.isRequired
}


export default App
