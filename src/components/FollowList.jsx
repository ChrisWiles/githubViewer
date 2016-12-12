import React, {PropTypes} from 'react'
import {Card, CardHeader, CardMedia} from 'material-ui/Card'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import {browserHistory} from 'react-router'

const style = {
  avatar: {
    borderRadius: 'none'
  },
  root: {
    display: 'block',
    maxWidth: 500
  },
  paper: {
    width: '100%'
  },
  card: {
    width: '100%'
  },
  title: {
    textAlign: 'center'
  },
  cardMedia: {
    boxShadow: 'none',
    width: 'inherit'
  }
}

const AvatarList = ({data, requestOwner, setNavBarTitle}) => {

  const handleClick = (login) => {
    requestOwner(login).then(data => {
      browserHistory.push(`/${login}`)
      setNavBarTitle(login)
    })
  }

  return (
    <div>
      {
        data.map(item => (
          <IconButton tooltip={item.name + ' aka ' + item.login} key={item.login} onTouchTap={handleClick.bind(this, item.login)}>
            <Avatar src={item.avatarURL} backgroundColor='none'/>
          </IconButton>
        ))
      }
    </div>
  )
}

const FollowList = ({title, data, requestOwner, setNavBarTitle}) => (
  <div style={style.root}>
    <Card style={style.card}>
      <CardHeader
        titleStyle={style.title}
        title={title}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardMedia expandable={true} style={style.cardMedia}>
        <Paper zDepth={2} style={style.paper} >
          <AvatarList data={data} setNavBarTitle={setNavBarTitle} requestOwner={requestOwner}/>
        </Paper>
      </CardMedia>
    </Card>
  </div>
)




FollowList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  setNavBarTitle: PropTypes.func.isRequired,
  requestOwner: PropTypes.func.isRequired
}

export default FollowList
