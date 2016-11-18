import React, {PropTypes} from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import CommitsList from './CommitsList'

const rootStyle = {
  margin: '20px 100px',
  display: 'flex',
  justifyContent: 'center'
}

const RepositoryPage = ({repoInfo}) => (
  <div style={rootStyle}>
    <Card>
      <CardHeader
        title={`Stargazers: ${repoInfo.stargazers}`}
        subtitle={`Watchers: ${repoInfo.watchers}`}
      />
      <CardText>
        {repoInfo.description}
      </CardText>
      <CommitsList commits={repoInfo.commits}/>
    </Card>
  </div>
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
