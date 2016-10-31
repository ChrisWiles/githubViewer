import React, {PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'

const NavBar = ({title, handleToggle}) => (
  <AppBar
      title={title}
      style={{position:'fixed', background: 'dodgerblue'}}
      zDepth={1}
      onLeftIconButtonTouchTap={handleToggle}
    />
)

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default NavBar
