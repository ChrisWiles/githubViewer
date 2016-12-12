import {connect} from 'react-redux'
import OwnerPage from '../components/OwnerPage'
import {setNavBarTitle} from '../actionCreators/UIActions'
import {requestOwner} from '../actionCreators/ownerActions'

const mapStateToProps = (state) => ({...state.owner})

export default connect(
  mapStateToProps, {
    setNavBarTitle,
    requestOwner
  }
)(OwnerPage)
