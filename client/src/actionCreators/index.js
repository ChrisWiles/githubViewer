import {REPO_NAME, REPO_OWNER, RESET_SEARCH} from '../constants/actionTypes'
import {getReposByLogin, getRepoInfoByName} from '../queries'
import {client} from '../createApolloClient'

export const requestReposNames = (login) => ({
  type: REPO_NAME,
  payload: client.query(getReposByLogin({login}))
})

export const requestRepoInfo = ({login, name}) => ({
  type: REPO_OWNER,
  payload: client.query(getRepoInfoByName({login, name}))
})

export const resetSearch = () => ({type: RESET_SEARCH})
