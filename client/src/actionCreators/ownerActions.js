/*
  Async Actions
  An action informing the reducers that the request began
  An action informing the reducers that the request finished successfully
  An action informing the reducers that the request failed
*/

import {
  OWNER_INFO_REQUEST,
  OWNER_INFO_SUCCESS,
  OWNER_INFO_FAILURE
} from '../constants/actionTypes'

import {getReposByLogin} from '../queries'
import {client} from '../createApolloClient'

export const requestOwnerInfo = (login) => {
  return dispatch => {
    dispatch({type: OWNER_INFO_REQUEST, login})
    return client.query(getReposByLogin({login}))
      .then(data => dispatch({type: OWNER_INFO_SUCCESS, payload: data}))
      .catch(err => dispatch({type: OWNER_INFO_FAILURE, err}))
  }
}
