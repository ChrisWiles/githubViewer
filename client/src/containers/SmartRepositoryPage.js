import {connect} from 'react-redux'
import RepositoryPage from '../components/RepositoryPage'

const mapStateToProps = (state) => {
  return {...state.repos}
}

export default connect(mapStateToProps)(RepositoryPage)
