import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Organizations from './Organizations'
import FollowList from './FollowList'
import OwnerContent from './OwnerContent'



import data from '../queries/dummyData'

const style = {
  root: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  }
}

const OwnerPage = ({loading}) => {
  const {followers, organizations, following} = data

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
          <OwnerContent {...data}/>
          <Divider/>
          <Organizations organizations={organizations}/>
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
  loading: PropTypes.bool.isRequired
}
export default OwnerPage
