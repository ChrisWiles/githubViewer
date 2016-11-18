import React, {PropTypes} from 'react'
import CommitsList from './CommitsList'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Star from 'material-ui/svg-icons/action/grade'
import IconButton from 'material-ui/IconButton'

const rootStyle = {
  margin: '20px 100px',
  display: 'flex',
  justifyContent: 'center'
}

const titleStyle = {
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  margin: '1.33em'
}

const iconButtonStyle = {
  marginTop: '-15px',
  marginRight: '-10px'
}

const RepositoryPage = ({repoInfo, title}) => (

  <div style={rootStyle}>

    <Paper zDepth={2}>
    <div style={titleStyle}>
      {title}
      <IconButton tooltip="Stargazers" style={iconButtonStyle}>
        <Star
          color={'#05828F'}
          hoverColor={'#f50057'}
        />
      </IconButton>
      {repoInfo.stargazers}
    </div>


      {/* {`Watch: ${repoInfo.watchers}`} */}

        <div style={titleStyle}>
          {repoInfo.description}
        </div>
      <Divider/>
      <h4 style={{textAlign: 'center'}}>
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
