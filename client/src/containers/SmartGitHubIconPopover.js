import {connect} from 'react-redux'
import GitHubIconPopover from '../components/GitHubIconPopover'
import {toggle, setAnchor} from '../actionCreators/githubIconPopoverActions'

const mapStateToProps = (state) => ({...state.githubIconPopover})

export default connect(
  mapStateToProps, {
    toggle,
    setAnchor
  }
)(GitHubIconPopover)
