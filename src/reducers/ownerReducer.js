import {
  OWNER_INFO_REQUEST,
  OWNER_INFO_SUCCESS,
  OWNER_INFO_FAILURE
} from '../constants/actionTypes'

const initialState = {
  createdAt: '',
  loading: false,
  failed: false,
  avatarURL: '',
  bio: '',
  company: '',
  email: '',
  location: '',
  name: '',
  websiteURL: '',
  login: '',
  followers: [{name: '', login: '', avatarURL: ''}],
  organizations: [{name: '', avatarURL: ''}],
  following: [{name: '', login: '', avatarURL: ''}]
}

function owner(state = initialState, action) {

  switch (action.type) {
    case OWNER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        failed: false,
        author: action.login
      }
    case OWNER_INFO_SUCCESS:
    const info = action.payload.data.repositoryOwner
      return {
        ...state,
        ...removeNesting(info),
        loading: false
      }
    case OWNER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        failed: true
      }
    default:
      return state
  }
}


function removeNesting({
  createdAt,
  avatarURL,
  bio,
  company,
  email,
  location,
  name,
  websiteURL,
  followers,
  organizations,
  following,
  login
}) {
  return {
    createdAt,
    avatarURL,
    bio,
    company,
    email,
    location,
    name,
    websiteURL,
    login,
    followers: [...followers.edges.map(ele => ({name: ele.node.name, login: ele.node.login, avatarURL: ele.node.avatarURL}))],
    organizations: [...organizations.edges.map(ele => ({name: ele.node.name, avatarURL: ele.node.avatarURL}))],
    following: [...followers.edges.map(ele => ({name: ele.node.name, login: ele.node.login, avatarURL: ele.node.avatarURL}))]
  }
}

export default owner
