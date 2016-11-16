import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../constants/actionTypes'
import {username, password} from '../config'

export let TOKEN = null

const base64 = require('base-64')
const config = {
  GITHUB_CLIENT_ID: 'e0b1671ff764de482212',
  GITHUB_CLIENT_SECRET: '8f77dcfd6a807cff38ac558400c859f240806071'
}

const AUTH_URL_PATH = 'https://api.github.com/authorizations'


export const requestLogin = () => {
  const bytes = username.trim() + ':' + password.trim()
  const encoded = base64.encode(bytes)

  return dispatch => {
    dispatch({type: LOGIN_REQUEST})

    return fetch(AUTH_URL_PATH, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + encoded,
        'User-Agent': 'GitHub Issue Browser',
        'Content-Type': 'application/json charset=utf-8',
        'Accept': 'application/vnd.github.inertia-preview+json'
      },
      body: JSON.stringify({
        'client_id': config.GITHUB_CLIENT_ID,
        'client_secret': config.GITHUB_CLIENT_SECRET,
        'scopes': [
          'user', 'repo'
        ],
        'note': 'not abuse'
      })
    }).then(response => response.json().then(json => {
      if (response.status < 400) {
        TOKEN = json.token
        dispatch({type: LOGIN_SUCCESS})
      } else {
        dispatch({type: LOGIN_FAILURE, payload: json.message})
      }
    })).catch(err => dispatch({type: LOGIN_FAILURE, err}))
  }
}
