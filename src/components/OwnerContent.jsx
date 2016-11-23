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
    display: 'inline-block'
  },
  text: {
    color: 'rgba(255, 255, 255, 0.5)'
  }
}



const OwnerContent = ({login, avatarURL, bio, company, email, location, name, websiteURL, organizations, createdAt}) => (
  <div style={style.root}>
    <div style={style.left}>
      <IconButton tooltip={name}>
        <Avatar src={avatarURL} backgroundColor='none' size={100}/>
      </IconButton>
      <div style={style.text}>
        {bio}
      </div>
    </div>
    <div style={style.right}>
      <div style={style.text}>
        {login}
      </div>
      <div style={style.text}>
        {`Joined ${moment(createdAt).fromNow()}`}
      </div>
      <div style={style.text}>
      {company}
      </div>
      <div style={style.text}>
        {location}
      </div>
      <div style={style.text}>
        {email}
      </div>
      <div style={style.text}>
        {websiteURL}
      </div>
    </div>
  </div>
)


OwnerContent.propTypes = {
  login: PropTypes.string.isRequired
}

export default OwnerContent
