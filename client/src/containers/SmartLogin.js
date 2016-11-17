import {connect} from 'react-redux'
import Login from '../components/Login'
import {requestLogin} from '../actionCreators/loginActions'

export default connect(null, {requestLogin})(Login)
