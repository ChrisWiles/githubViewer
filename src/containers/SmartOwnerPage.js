import {connect} from 'react-redux'
import OwnerPage from '../components/OwnerPage'


const mapStateToProps = (state) => ({...state.owner})

export default connect(
  mapStateToProps
)(OwnerPage)
