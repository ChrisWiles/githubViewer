import {connect} from 'react-redux'
import GitHubIconPopover from '../components/GitHubIconPopover'
import {toggle, setAnchor} from '../actionCreators/githubIconPopoverActions'

const mapStateToProps = (state) => {
  return {...state.gitHubIconPopover}
}

export default connect(
  mapStateToProps, {
    toggle,
    setAnchor
  }
)(GitHubIconPopover)
