import {connect} from 'react-redux'
import {requestReposNames, resetSearch, requestRepoInfo} from '../actionCreators'
import SearchLogin from '../components/SearchLogin'

const mapStateToProps = (state) => {
  // console.log({...state.repos})
  return {...state.repos}
}

export default connect(
  mapStateToProps, {
    requestReposNames,
    resetSearch,
    requestRepoInfo
  }
)(SearchLogin)
