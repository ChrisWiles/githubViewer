import {connect} from 'react-redux'
import RepositoryPage from '../components/RepositoryPage'

const mapStateToProps = (state) => ({...state.repos})

export default connect(mapStateToProps)(RepositoryPage)
