import {
  REPO_NAME_REQUEST,
  REPO_NAME_SUCCESS,
  REPO_NAME_FAILURE,
  REPO_OWNER_REQUEST,
  REPO_OWNER_SUCCESS,
  REPO_OWNER_FAILURE,
  RESET_SEARCH
} from '../constants/actionTypes'

/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

const initialState = {
   repos: [],
   totalCount: 0,
   repoSearchLoading: false,
   repoSearchFailed: false,
   repoOwner: '',
   repoName: '',
   repoInfo: {
      description: '',
      stargazers: 0,
      watchers: 0,
      commits: [
         {
            login: '',
            message: '',
            avatarURL: '',
            name: '',
            email: '',
            date: '',
            comments: {}
         }
      ]
   }
}

function repos(state = initialState, action) {

  const repoNames = repos => repos.map(repo => repo.node.name)

  switch (action.type) {
    case REPO_OWNER_REQUEST:
      return {
        ...state,
        repoSearchLoading: true,
        repoSearchFailed: false,
        repoOwner: action.login
      }
    case REPO_OWNER_SUCCESS:
      let {edges, totalCount} = action.payload.data.repositoryOwner.repositories
      return {
        ...state,
        repos: repoNames(edges),
        totalCount,
        repoSearchLoading: false
      }
    case REPO_OWNER_FAILURE:
      return {
        ...state,
        repoSearchLoading: false,
        repoSearchFailed: true
      }
    case REPO_NAME_REQUEST:
      return {
        ...state,
        repoName: action.name
      }
    case REPO_NAME_SUCCESS:
    const info = action.payload.data.repositoryOwner.repository
      return {
        ...state,
        repoInfo: removeRepoInfoNesting(info)
      }
    case REPO_NAME_FAILURE:
      return {
        ...state,
        repoName: ''
      }
    case RESET_SEARCH:
      return initialState
    default:
      return state
  }
}

function removeRepoInfoNesting(data) {
  return {
    description: data.description || '',
    stargazers: data.stargazers.totalCount,
    watchers: data.watchers.totalCount,
    commits: data.ref.target.history.edges.map(ele => {
      const {message, author, comments} = ele.node
      const {avatarURL, name, email, date, user} = author
      return {
        login: user.login,
        message,
        avatarURL,
        name,
        email,
        date,
        comments
      }
    })
  }
}

export default repos
