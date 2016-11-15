import {connect} from 'react-redux'
import SearchLogin from '../components/SearchLogin'
import {requestReposNames, resetSearch} from '../actionCreators'

const mapStateToProps = (state) => {
  let {repos, totalCount} = state.repos
  return ({repos, totalCount})
}

export default connect(mapStateToProps, {requestReposNames, resetSearch})(SearchLogin)
