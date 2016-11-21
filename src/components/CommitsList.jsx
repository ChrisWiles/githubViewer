import React, {PropTypes} from 'react'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import moment from 'moment'
import Paper from 'material-ui/Paper'
import IconButton from 'material-ui/IconButton'
import {browserHistory} from 'react-router'

const style = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  commit: {
    display: 'inlineFlex'
  },
  avatar: {
    margin: '5px',
    position: 'absolute'
  },
  header: {
    display: 'inline',
  },
  msg: {
    color: "rgba(255, 255, 255, 0.44)",
    display: 'block',
    marginTop: '20px',
    marginBottom: '8px'
  },
  text: {
    marginLeft: '64px'
  }
}



const CommitsList = ({commits, setNavBarTitle, requestOwner}) => {

  const handleClick = (login) => {
    requestOwner(login).then(data => {
      browserHistory.push(`/${login}`)
      setNavBarTitle(login)
    })
  }

  const listItems = commits.map((commit, i) => (
    <Paper zDepth={0} key={i} style={style.commit}>
      <IconButton tooltip={commit.name} style={{position: 'absolute'}} onTouchTap={handleClick.bind(this, commit.login)}>
        <Avatar src={commit.avatarURL} style={style.avatar}/>
      </IconButton>
        <div style={style.text}>
          <div style={style.header}>
            {`${commit.login} <${commit.email}> commited ${moment(commit.date).fromNow()}`}
          </div>
          <div style={style.msg}>
            {commit.message}
          </div>
        </div>
      <Divider/>
    </Paper>
  ))

  return (
    <div style={style.root}>
      <Paper zDepth={2}>
        {listItems}
      </Paper>
    </div>
  )
}


const {arrayOf, shape, string, object, func} = PropTypes

CommitsList.propTypes = {
  commits: arrayOf(shape({
    avatarURL: string.isRequired,
    comments: object.isRequired,
    date: string.isRequired,
    email: string.isRequired,
    login: string.isRequired,
    message: string.isRequired,
    name: string.isRequired
  }).isRequired).isRequired,
  setNavBarTitle: func.isRequired,
  requestOwner: func.isRequired
}

export default CommitsList
