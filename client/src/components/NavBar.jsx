import React, {PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar'
import Menu from 'material-ui/svg-icons/navigation/menu'
import SmartSearchBar from '../containers/SmartSearchBar'
import GitHubIcon from './GitHubIcon'

// TODO: display username and GitHub logo after sign in


const label = (isLogin, isLoggingIn) => {
  if(isLoggingIn) {
    return 'Logging in...'
  } else {
    return isLogin ? 'Welcome' : ''
  }
}


const NavBar = ({title, handleToggle, isLogin, isLoggingIn, toggleSnackBar}) => {

  return  (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <IconButton onTouchTap={handleToggle}><Menu/></IconButton>
          <ToolbarTitle text={title}/>
        </ToolbarGroup>
        <SmartSearchBar/>
        <ToolbarGroup lastChild={true}>
          <RaisedButton
            primary={true}
            label={label(isLogin, isLoggingIn)}
            icon={<GitHubIcon/>}
            onTouchTap={toggleSnackBar}
          />
        </ToolbarGroup>
      </Toolbar>
    )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  isLoggingIn: PropTypes.bool.isRequired,
  toggleSnackBar: PropTypes.func.isRequired
}

export default NavBar
