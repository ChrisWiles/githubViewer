import React, {PropTypes} from 'react'
import {Card, CardHeader} from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'

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

const AvatarList = ({data}) => (
  <div>
    {
      data.map(item => (
        <IconButton tooltip={item.name + ' aka ' + item.login}>
          <Avatar src={item.avatarURL} backgroundColor='none'/>
        </IconButton>
      ))
    }
  </div>
)

const FollowList = ({title, data}) => (
  <div style={style.root}>
    <Card style={style.card}>
      <CardHeader
        titleStyle={style.title}
        title={title}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <Paper zDepth={2} style={style.paper} expandable={true}>
        <AvatarList data={data}/>
      </Paper>
    </Card>
  </div>
)




FollowList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
}

export default FollowList
