import {connect} from 'react-redux'
import App from '../components/App'
import {requestLogin} from '../actionCreators/loginActions'
import {toggleSlideDrawer, setNavBarTitle} from '../actionCreators/UIActions'
import {toggle, setAnchor} from '../actionCreators/githubIconPopoverActions'

const mapStateToProps = (state) => {
  return {...state.login, ...state.ui}
}

export default connect(
  mapStateToProps, {
    requestLogin,
    toggleSlideDrawer,
    setNavBarTitle,
    gitHubIconPopoverToggle: toggle,
    gitHubIconPopoverSetAnchor: setAnchor
  }
)(App)
