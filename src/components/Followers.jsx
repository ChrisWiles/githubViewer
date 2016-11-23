import React, {PropTypes} from 'react'
import {Card, CardHeader} from 'material-ui/Card'
import Paper from 'material-ui/Paper'

const style = {
  avatar: {
    borderRadius: 'none'
  },
  root: {
    display: 'block'
  },
  paper: {
    width: '100%'
  },
  card: {
    width: '100%'
  },
  title: {
    textAlign: 'center'
  }
}

const Followers = ({followers}) => (
  <div style={style.root}>
    <Card style={style.card}>
      <CardHeader
        titleStyle={style.title}
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
