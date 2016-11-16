import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import Menu from 'material-ui/svg-icons/navigation/menu'
import SmartSearchBar from '../containers/SmartSearchBar'

const label = (bool) => bool ? 'Logout' : "Login"

const NavBar = ({title, handleToggle, isLogin, handleLogin}) => (
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <IconButton onTouchTap={handleToggle}><Menu/></IconButton>
      <ToolbarTitle text={title}/>
    </ToolbarGroup>
    <SmartSearchBar/>
    <ToolbarGroup lastChild={true}>
      <RaisedButton primary={true} label={label(isLogin)} onTouchTap={handleLogin}/>
    </ToolbarGroup>
  </Toolbar>
)

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired
}

export default NavBar
