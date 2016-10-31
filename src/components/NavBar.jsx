import React, {PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'

const NavBar = ({title, handleToggle}) => (
  <AppBar
      title={title}
      iconElementLeft={<IconButton><Menu/></IconButton>}
      style={{position:'fixed'}}
      zDepth={1}
      onLeftIconButtonTouchTap={e => console.log(e)}
    />
)

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default NavBar
