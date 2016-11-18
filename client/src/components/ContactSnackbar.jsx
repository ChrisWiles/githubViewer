import React, {PropTypes} from 'react'
import Snackbar from 'material-ui/Snackbar'

const ContactSnackbar = ({isOpen, toggle}) => (
  <Snackbar
    open={isOpen}
    message="Created by Christopher Wiles"
    autoHideDuration={4000}
    onRequestClose={toggle}
  />
)

ContactSnackbar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
}

export default ContactSnackbar
