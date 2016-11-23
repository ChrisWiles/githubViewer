import React, {PropTypes} from 'react'
import {Card, CardHeader} from 'material-ui/Card'
import Paper from 'material-ui/Paper'

const style = {
  avatar: {
    borderRadius: 'none'
  },
  root: {
    display: 'flex'
  },
  paper: {

  }
}

const Followers = ({followers}) => (
  <div style={style.root}>
    <Card >
      <CardHeader
        title="Followers"
        actAsExpander={true}
        showExpandableButton={true}
      />
      <Paper zDepth={2} style={style.paper} expandable={true}>
        Followers
      </Paper>
    </Card>
  </div>
)





Followers.propTypes = {
  followers: PropTypes.array.isRequired
}

export default Followers
