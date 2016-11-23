import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Organizations from './Organizations'
import Followers from './Followers'
import Following from './Following'

import data from '../queries/dummyData'


const style = {
  root: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    width: 450,
    margin: 20,
    display: 'inline-block'
  },
  left: {
    float: 'left'
  },
  right: {
    float: 'right'
  }
}

const OwnerPage = ({loading}) => {
  const {login, avatarURL, bio, company, email, location, name, websiteURL, organizations} = data

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
          <div style={style.left}>
            <IconButton tooltip={name}>
              <Avatar src={avatarURL} backgroundColor='none' size={100}/>
            </IconButton>
            <p>{bio}</p>
          </div>
          <div style={style.right}>
            <p>{login}</p>
            <p>{company}</p>
            <p>{email}</p>
            <p>{location}</p>
            <p>{websiteURL}</p>
          </div>
          <Organizations organizations={organizations}/>
        </Paper>
      </div>
    )
  }
}

const initialState = {
  loading: false,
  failed: false,
  avatarURL: '',
  bio: '',
  company: '',
  email: '',
  location: '',
  name: '',
  websiteURL: '',
  login: '',
  followers: [{name: '', login: '', avatarURL: ''}],
  organizations: [{name: '', avatarURL: ''}],
  following: [{name: '', login: '', avatarURL: ''}]
}

OwnerPage.propTypes = {
  loading: PropTypes.bool.isRequired
}
export default OwnerPage
