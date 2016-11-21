import React, {PropTypes} from 'react'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import moment from 'moment'
import Paper from 'material-ui/Paper'

const rootStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const commitStyle = {
  display: 'inlineFlex'
}

const CommitsList = ({commits}) => {

  const listItems = commits.map((commit, i) => (
    <Paper zDepth={0} key={i} style={commitStyle}>
      <Avatar src={commit.avatarURL}/>
      {`${commit.login} <${commit.email}> commited ${moment(commit.date).fromNow()}`}
      {commit.message}
      <Divider/>
    </Paper>
  ))

  return (
    <div style={rootStyle}>
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
