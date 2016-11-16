import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import Menu from 'material-ui/svg-icons/navigation/menu'
import SmartSearchLogin from '../containers/SmartSearchBar'

const label = (bool) => bool ? 'Logout' : "Login"

const NavBar = ({title, handleToggle, isLogin, toggleLogin}) => (
  <Toolbar>
    <ToolbarGroup firstChild={true}>
      <IconButton onTouchTap={handleToggle}><Menu/></IconButton>
      <ToolbarTitle text={title}/>
    </ToolbarGroup>
    <SmartSearchLogin/>
    <ToolbarGroup lastChild={true}>
      <RaisedButton primary={true} label={label(isLogin)} onTouchTap={toggleLogin}/>
    </ToolbarGroup>
  </Toolbar>
)

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  toggleLogin: PropTypes.func.isRequired
}

export default NavBar
