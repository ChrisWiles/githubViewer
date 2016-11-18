import React, {PropTypes} from 'react'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import Paper from 'material-ui/Paper'

const rootStyle = {
  margin: '20px 100px',
  minWidth: 400,
  maxWidth: 800,
  display: 'flex',
  justifyContent: 'center'
}
const paperStyle = {
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
}

const CommitsList = ({commits}) => {
  
  const listItems = commits.map(commit => (
    <div key={commit.date}>
      <ListItem
        primaryText={commit.login}
        secondaryText={commit.email}
        rightAvatar={<Avatar src={commit.avatarURL}/>}
      />
      <Divider/>
    </div>
  ))

  const listNodes = (
    <div>
      <Subheader>Commits</Subheader>
      <Divider/>
      {listItems}
    </div>
  )

  return (
    <div style={rootStyle}>
      <Paper style={paperStyle} zDepth={1}>
        <List children={listNodes}/>
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
