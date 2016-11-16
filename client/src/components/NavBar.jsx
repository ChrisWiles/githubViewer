import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import Menu from 'material-ui/svg-icons/navigation/menu'
import SmartSearchBar from '../containers/SmartSearchBar'

const label = (isLogin, isLoggingIn) => {
  if(isLoggingIn) {
    return 'Logging in...'
  } else {
    return isLogin ? 'Logout' : "Login"
  }
}

const NavBar = ({title, handleToggle, isLogin, handleLogin, isLoggingIn}) => (
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <IconButton onTouchTap={handleToggle}><Menu/></IconButton>
      <ToolbarTitle text={title}/>
    </ToolbarGroup>
    <SmartSearchBar/>
    <ToolbarGroup lastChild={true}>
      <RaisedButton primary={true} label={label(isLogin, isLoggingIn)} onTouchTap={handleLogin}/>
    </ToolbarGroup>
  </Toolbar>
)

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isLoggingIn: PropTypes.bool.isRequired
}

export default NavBar
