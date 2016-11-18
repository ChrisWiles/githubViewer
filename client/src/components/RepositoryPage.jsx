import React, {PropTypes} from 'react'
import CommitsList from './CommitsList'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'

const rootStyle = {
  margin: '20px 100px',
  display: 'flex',
  justifyContent: 'center'
}

const RepositoryPage = ({repoInfo}) => (

  <div style={rootStyle}>
    <Paper zDepth={2}>
      <h4>
        {`Stargazers: ${repoInfo.stargazers}`}
      </h4>
      <h4>
        {`Watchers: ${repoInfo.watchers}`}
      </h4>
      <Divider/> {repoInfo.description}
      <Divider/>
      <h4>
        Commits
      </h4>
      <Divider/>
      <CommitsList commits={repoInfo.commits}/>
    </Paper>
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
