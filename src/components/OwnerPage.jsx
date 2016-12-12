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

const OwnerPage = ({loading, followers, following, ...other}) => {
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
          <FollowList title='Followers' data={followers}/>
          <Divider/>
          <FollowList title='Following' data={following}/>
        </Paper>
      </div>
    )
  }
}

OwnerPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  followers: PropTypes.array.isRequired,
  following: PropTypes.array.isRequired
}

export default OwnerPage
