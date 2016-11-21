import React, {PropTypes} from 'react'
import CommitsList from './CommitsList'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import Star from 'material-ui/svg-icons/action/grade'
import IconButton from 'material-ui/IconButton'
import CircularProgress from 'material-ui/CircularProgress'

const style = {
  root: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  },
  progress: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '1.33em',
    color: '#05828F',
    fontWeight: 800
  },
  description: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '1.33em'
  },
  iconButton: {
    marginTop: '-12px',
    marginRight: '-10px'
  }
}

const RepositoryPage = ({repoInfo, title, loading}) => {
    if(loading) {
      return (
        <div style={style.progress}>
           <CircularProgress size={3} />
        </div>
      )
    } else {
      return (
        <div style={style.root}>

          <Paper zDepth={2}>
          <div style={style.title}>
            {title}
            <IconButton tooltip="Stargazers" style={style.iconButton}>
              <Star
                color={'#05828F'}
                hoverColor={'#f50057'}
              />
            </IconButton>
            {repoInfo.stargazers}
          </div>


            {/* {`Watch: ${repoInfo.watchers}`} */}

              <div style={style.description}>
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
    }
}

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
