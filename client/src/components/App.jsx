import React, {Component, PropTypes} from 'react'
import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'

class App extends Component {

  render() {
    return (
      <div>
        <NavBar
          handleToggle={this.props.toggleSlideDrawer}
          handleLogin={this.props.requestLogin}
          title={this.props.navTitle}
          isLogin={this.props.isLoggedIn}
          isLoggingIn={this.props.isLoggingIn}
        />
        <SlideDrawer
          handleToggle={this.props.toggleSlideDrawer}
          open={this.props.isSlideDrawerOpen}
          setTitle={this.props.setNavBarTitle}
        />
        {/* child component will be rendered here */}
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  setNavBarTitle: PropTypes.func.isRequired,
  navTitle: PropTypes.string.isRequired,
  isSlideDrawerOpen: PropTypes.bool.isRequired,
  toggleSlideDrawer: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  requestLogin: PropTypes.func.isRequired,
  loginFailure: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  children: PropTypes.node
}


export default App
