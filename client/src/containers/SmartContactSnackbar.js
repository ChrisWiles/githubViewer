import {connect} from 'react-redux'
import ContactSnackbar from '../components/ContactSnackbar'
import {toggle} from '../actionCreators/contactSnackbarActions'


const mapStateToProps = (state) => ({...state.contactSnackbar})

export default connect(mapStateToProps, {toggle})(ContactSnackbar)
