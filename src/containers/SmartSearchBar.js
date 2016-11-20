import {connect} from 'react-redux'
import {requestReposNames, resetSearch, requestRepoInfo} from '../actionCreators/repoActions'
import {setNavBarTitle, setRepoURL} from '../actionCreators/UIActions'
import SearchBar from '../components/SearchBar'

const mapStateToProps = (state) => {
  return {...state.repos, isLoggedIn: state.login.isLoggedIn}
}

export default connect(
  mapStateToProps, {
    requestReposNames,
    resetSearch,
    requestRepoInfo,
    setNavBarTitle,
    setRepoURL
  }
)(SearchBar)
