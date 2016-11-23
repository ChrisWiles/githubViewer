import React, {PropTypes} from 'react'
import moment from 'moment'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'

const style = {
  left: {
    float: 'left'
  },
  right: {
    float: 'right'
  }
}

const OwnerContent = ({login, avatarURL, bio, company, email, location, name, websiteURL, organizations, createdAt}) => (
  <div>
    <div style={style.left}>
      <IconButton tooltip={name}>
        <Avatar src={avatarURL} backgroundColor='none' size={100}/>
      </IconButton>
      <p>{bio}</p>
    </div>
    <div style={style.right}>
      <p>{login}</p>
      <p>{`Joined ${moment(createdAt).fromNow()}`}</p>
      <p>{company}</p>
      <p>{email}</p>
      <p>{location}</p>
      <p>{websiteURL}</p>
    </div>
  </div>
)


OwnerContent.propTypes = {
  login: PropTypes.string.isRequired
}

export default OwnerContent
