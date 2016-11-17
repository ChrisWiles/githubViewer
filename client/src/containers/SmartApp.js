import {connect} from 'react-redux'
import App from '../components/App'
import {requestLogin} from '../actionCreators/loginActions'
import {toggleSlideDrawer} from '../actionCreators/UIActions'


const mapStateToProps = (state) => {
  return {...state.login, ...state.ui}
}

export default connect(
  mapStateToProps, {
    requestLogin,
    toggleSlideDrawer
  }
)(App)
