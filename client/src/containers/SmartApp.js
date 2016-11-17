import {connect} from 'react-redux'
import App from '../components/App'
import {requestLogin} from '../actionCreators/loginActions'
import {toggleSlideDrawer, setNavBarTitle} from '../actionCreators/UIActions'


const mapStateToProps = (state) => {
  return {...state.login, ...state.ui}
}

export default connect(
  mapStateToProps, {
    requestLogin,
    toggleSlideDrawer,
    setNavBarTitle
  }
)(App)
