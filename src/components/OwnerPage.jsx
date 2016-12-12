import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
// import Organizations from './Organizations'
import FollowList from './FollowList'
import OwnerContent from './OwnerContent'

// TODO: organizations query does not work
// https://platform.github.community/t/token-has-not-been-granted-the-required-scopes-to-execute-this-query/881

const style = {
  root: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  }
}

const OwnerPage = ({setNavBarTitle, requestOwner, loading, followers, following, ...other}) => {
  if(loading) {
    return (
      <div style={style.root}>
         <CircularProgress size={3} />
      </div>
    )
  } else {
    return (
      <div style={style.root}>
        <Paper zDepth={2}>
          <OwnerContent {...other}/>
          <Divider/>
          {/* <Organizations organizations={organizations}/> */}
          <Divider/>
          <FollowList title='Followers' data={followers} setNavBarTitle={setNavBarTitle} requestOwner={requestOwner}/>
          <Divider/>
          <FollowList title='Following' data={following} setNavBarTitle={setNavBarTitle} requestOwner={requestOwner}/>
        </Paper>
      </div>
    )
  }
}

OwnerPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  followers: PropTypes.array.isRequired,
  following: PropTypes.array.isRequired,
  setNavBarTitle: PropTypes.func.isRequired,
  requestOwner: PropTypes.func.isRequired
}

export default OwnerPage
