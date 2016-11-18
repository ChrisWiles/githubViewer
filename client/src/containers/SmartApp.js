import {connect} from 'react-redux'
import App from '../components/App'
import {requestLogin} from '../actionCreators/loginActions'
import {toggleSlideDrawer, setNavBarTitle} from '../actionCreators/UIActions'
import {toggle} from '../actionCreators/contactSnackbarActions'

const mapStateToProps = (state) => ({...state.login, ...state.ui, ...state.contactSnackbar})

export default connect(
  mapStateToProps, {
    requestLogin,
    toggleSlideDrawer,
    setNavBarTitle,
    toggleSnackBar: toggle
  }
)(App)
