import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper'

import Organizations from './Organizations'
import Followers from './Followers'
import Following from './Following'
import OwnerContent from './OwnerContent'



import data from '../queries/dummyData'


const style = {
  root: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    width: 450,
    height: 236,
    margin: 20,
    display: 'inline-block',
    padding: 10
  }
}

const OwnerPage = ({loading}) => {
  const {followers, organizations} = data

  if(loading) {
    return (
      <div style={style.root}>
         <CircularProgress size={3} />
      </div>
    )
  } else {
    return (
      <div style={style.root}>
        <Paper zDepth={2} style={style.paper}>
          <OwnerContent {...data}/>
          <Organizations organizations={organizations}/>
          <Followers followers={followers}/>
        </Paper>
      </div>
    )
  }
}

OwnerPage.propTypes = {
  loading: PropTypes.bool.isRequired
}
export default OwnerPage
