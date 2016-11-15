import {REPO_NAME, REPO_OWNER, RESET_SEARCH} from '../constants/actionTypes'
import {getReposByLogin, getRepoInfoByName} from '../queries'
import {client} from '../createApolloClient'

export function requestReposNames(login) {
  return {
    type: REPO_NAME,
    payload: client.query(getReposByLogin({login}))
  }
}

export function requestRepoInfo({login, name}) {
  return {
    type: REPO_OWNER,
    payload: client.query(getRepoInfoByName({login, name}))
  }
}

export function resetSearch() {
  return {
    type: RESET_SEARCH
  }
}
