import React, {PropTypes} from 'react'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import moment from 'moment'

const rootStyle = {
  display: 'flex',
  justifyContent: 'center'
}

const style = {
  secondaryText: {  fontSize: 14,
    margin: 0,
    marginTop: 4,
    // color: listItem.secondaryTextColor
    color: 'black',
    // needed for 2 and 3 line ellipsis
    overflow: 'hidden',
    textOverflow: 'ellipsis'}
}


const CommitsList = ({commits}) => {

  const listItems = commits.map((commit, i) => (
    <div key={i}>
      <ListItem
        style={style}
        primaryText={`${commit.login} <${commit.email}> commited ${moment(commit.date).fromNow()}`}
        secondaryText={commit.message}
        leftAvatar={<Avatar src={commit.avatarURL}/>}
        secondaryTextLines={2}
      />
      <Divider/>
    </div>
  ))

  return (
    <div style={rootStyle}>
      <List children={listItems}/>
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
