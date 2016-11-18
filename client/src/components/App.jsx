import React, {PropTypes} from 'react'
import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'
import SmartLogin from '../containers/SmartLogin'
import ContactSnackbar from './ContactSnackbar'

const App = ({children, setNavBarTitle, isSlideDrawerOpen, isLoggingIn, toggleSlideDrawer, requestLogin, navTitle, isLoggedIn, contactSnackbarisOpen, toggleSnackBar}) => (
  <div>
    <ContactSnackbar isOpen={contactSnackbarisOpen} toggle={toggleSnackBar}/>
    <NavBar
      handleToggle={toggleSlideDrawer}
      handleLogin={requestLogin}
      title={navTitle}
      isLogin={isLoggedIn}
      isLoggingIn={isLoggingIn}
      toggleSnackBar={toggleSnackBar}
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

const {node, bool, string, func} = PropTypes

App.propTypes = {
  children: node,
  isLoggedIn: bool.isRequired,
  isLoggingIn: bool.isRequired,
  isSlideDrawerOpen: bool.isRequired,
  loginFailure: bool.isRequired,
  navTitle: string.isRequired,
  requestLogin: func.isRequired,
  setNavBarTitle: func.isRequired,
  toggleSlideDrawer: func.isRequired,
  contactSnackbarisOpen: bool.isRequired,
  toggleSnackBar: func.isRequired
}

export default App
