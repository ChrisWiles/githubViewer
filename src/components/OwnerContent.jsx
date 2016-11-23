import React, {PropTypes} from 'react'
import moment from 'moment'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'

const style = {
  left: {
    float: 'left',
    marginLeft: 20
  },
  right: {
    marginTop: 10,
    float: 'right',
    marginLeft: 50,
    marginRight: 20
  },
  root: {
    display: 'inline-block',
    width: 500
  },
  text: {
    color: 'rgba(255, 255, 255, 0.5)'
  }
}

const Text = ({text}) => (
  <div style={style.text}>
    {text}
  </div>
)


const OwnerContent = ({login, avatarURL, bio, company, email, location, name, websiteURL, organizations, createdAt}) => (
  <div style={style.root}>
    <div style={style.left}>
      <IconButton tooltip={name}>
        <Avatar src={avatarURL} backgroundColor='none' size={100}/>
      </IconButton>
      <Text text={bio}/>
    </div>
    <div style={style.right}>
      <Text text={login}/>
      <Text text={`Joined ${moment(createdAt).fromNow()}`}/>
      <Text text={company}/>
      <Text text={location}/>
      <Text text={email}/>
      <Text text={websiteURL}/>
    </div>
  </div>
)


OwnerContent.propTypes = {
  login: PropTypes.string.isRequired
}

export default OwnerContent
