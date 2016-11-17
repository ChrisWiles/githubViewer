import React, {PropTypes} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import {List, ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'

const CommitsList = ({commits}) => {
  const listItems = commits.map(commit => (
    <div key={commit.date}>
      <ListItem
        primaryText={commit.login}
        secondaryText={commit.email}
        rightAvatar={<Avatar src={commit.avatarURL} />}
      />
      <Divider/>
    </div>
  ))

  return <List children={listItems}/>
}

const RepositoryPage = ({repoInfo}) => (
  <Card >
    <CardHeader
      title={`Stargazers: ${repoInfo.stargazers}`}
      subtitle={`Watchers: ${repoInfo.watchers}`}
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardText>
      {repoInfo.description}
    </CardText>
    <CommitsList commits={repoInfo.commits} expandable={true}/>
  </Card>
)

const {arrayOf, number, shape, string, object} = PropTypes

RepositoryPage.propTypes = {
   repoInfo: shape({
      commits: arrayOf(shape({
         avatarURL: string.isRequired,
         comments: object.isRequired,
         date: string.isRequired,
         email: string.isRequired,
         login: string.isRequired,
         message: string.isRequired,
         name: string.isRequired
      }).isRequired).isRequired,
      description: string.isRequired,
      stargazers: number.isRequired,
      watchers: number.isRequired
   }).isRequired
}

export default RepositoryPage
