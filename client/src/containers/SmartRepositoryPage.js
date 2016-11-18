import {connect} from 'react-redux'
import RepositoryPage from '../components/RepositoryPage'

const mapStateToProps = (state) => ({...state.repos, title: state.ui.navTitle})

export default connect(mapStateToProps)(RepositoryPage)
