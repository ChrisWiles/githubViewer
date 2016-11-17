import React, {Component, PropTypes} from 'react'
import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'

class App extends Component {
  state = {title: ''}

  setTitle = (title) => this.setState({title})

  render() {

    const {title} = this.state
    return (
      <div>
        <NavBar
          handleToggle={this.props.toggleSlideDrawer}
          handleLogin={this.props.requestLogin}
          title={title}
          isLogin={this.props.isLoggedIn}
          isLoggingIn={this.props.isLoggingIn}
        />
        <SlideDrawer
          handleToggle={this.props.toggleSlideDrawer}
          open={this.props.isSlideDrawerOpen}
          setTitle={this.setTitle}
        />
        {/* child component will be rendered here */}
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  isSlideDrawerOpen: PropTypes.bool.isRequired,
  toggleSlideDrawer: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  requestLogin: PropTypes.func.isRequired,
  loginFailure: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  children: PropTypes.node
}


export default App
