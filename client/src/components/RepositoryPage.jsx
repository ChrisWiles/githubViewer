import React, {PropTypes} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import CommitsList from './CommitsList'

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
