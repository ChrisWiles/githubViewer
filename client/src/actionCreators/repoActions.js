/*
  Async Actions
  An action informing the reducers that the request began
  An action informing the reducers that the request finished successfully
  An action informing the reducers that the request failed
*/

import {
  REPO_NAME_REQUEST,
  REPO_NAME_SUCCESS,
  // REPO_NAME_FAILURE,
  REPO_OWNER_REQUEST,
  REPO_OWNER_SUCCESS,
  REPO_OWNER_FAILURE,
  RESET_SEARCH,
  RESET_ERROR_MESSAGE
} from '../constants/actionTypes'

import {getReposByLogin, getRepoInfoByName} from '../queries'
import {client} from '../createApolloClient'

export const requestReposNames = (login) => {
  return dispatch => {
    dispatch({type: REPO_OWNER_REQUEST, login})
    return client.query(getReposByLogin({login}))
      .then(data => dispatch({type: REPO_OWNER_SUCCESS, payload: data}))
      .catch(err => dispatch({type: REPO_OWNER_FAILURE, err}))
  }
}

export const requestRepoInfo = (login, name) => {
  return dispatch => {
    dispatch({type: REPO_NAME_REQUEST, name})
    return client.query(getRepoInfoByName({login, name}))
      .then(data => dispatch({type: REPO_NAME_SUCCESS, payload: data}))
      // .catch(err => dispatch({type: REPO_NAME_FAILURE, err}))
  }
}

export const resetSearch = () => ({type: RESET_SEARCH})
export const resetErrorMessage = () => ({type: RESET_ERROR_MESSAGE})
