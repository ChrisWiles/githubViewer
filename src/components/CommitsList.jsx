import React, {PropTypes} from 'react'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import moment from 'moment'
import Paper from 'material-ui/Paper'


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
    marginLeft: '55px'
  }
}

const CommitsList = ({commits}) => {

  const listItems = commits.map((commit, i) => (
    <Paper zDepth={0} key={i} style={style.commit}>
      <Avatar src={commit.avatarURL} style={style.avatar}/>
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


const {arrayOf, shape, string, object} = PropTypes

CommitsList.propTypes = {
  commits: arrayOf(shape({
    avatarURL: string.isRequired,
    comments: object.isRequired,
    date: string.isRequired,
    email: string.isRequired,
    login: string.isRequired,
    message: string.isRequired,
    name: string.isRequired
  }).isRequired).isRequired
}

export default CommitsList
