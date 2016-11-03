import axios from 'axios'
import Qs from 'qs'


// axios('https://www.reddit.com/user/kn0thing/about.json').then(res => console.log(res))


let get = function(path, query) {
  if (query) {
    query = `?${Qs.stringify(query)}`
  }
  else {
    query = ''
  }

  return axios(`https://reddit.com/${path}.json${query}`).then(res => res)


}

export const getUser = function(username) {
  return get(`user/${username}/about`)
}

export const getSubreddit = function(name) {
  return get(`r/${name}/about`)
}

export const getSubredditListings = function(subredditName, listingType, options = {}) {
  return get(`r/${subredditName}/${listingType}`, options)
}

export const getComments = function(subredditName, linkId, options = {}) {
  return get(`r/${subredditName}/comments/${linkId}`, options)
}
