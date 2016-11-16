import {connect} from 'react-redux'
import App from '../components/App'
import {requestLogin} from '../actionCreators/loginActions'



const mapStateToProps = (state) => {
  return {...state.login}
}

export default connect(
  mapStateToProps, {
    requestLogin
  }
)(App)
