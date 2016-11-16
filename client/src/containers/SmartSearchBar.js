import {connect} from 'react-redux'
import {requestReposNames, resetSearch, requestRepoInfo} from '../actionCreators/repoActions'
import SearchBar from '../components/SearchBar'

const mapStateToProps = (state) => {
  return {...state.repos}
}

export default connect(
  mapStateToProps, {
    requestReposNames,
    resetSearch,
    requestRepoInfo
  }
)(SearchBar)
