import React, {PropTypes} from 'react'
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

const GitHubIconPopover = ({isOpen, anchorEl, toggle}) => {

  const handleRequestClose = () => toggle()
  
  console.log(isOpen, anchorEl)
  return (
    <div>
      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        onRequestClose={handleRequestClose}
        animation={PopoverAnimationVertical}>
        <Menu>
          <MenuItem primaryText='Chirs Wiles'/>
        </Menu>
      </Popover>
    </div>
  )
}

GitHubIconPopover.propTypes = {
  isOpen: PropTypes.bool,
  anchorEl: PropTypes.node,
  toggle: PropTypes.func
}


export default GitHubIconPopover
