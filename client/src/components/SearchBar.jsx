import React, {PropTypes, Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import FlatButton from 'material-ui/FlatButton'

import {browserHistory} from 'react-router'

// TODO: if searchbox is clicked and !loggedIn => popup login modal


class SearchBar extends Component {
  state = {
    text: ''
  }

  componentWillReceiveProps({repoName, repoOwner, repoInfo}) {
    if(repoName && repoOwner) {
      const url = `/${repoOwner}/${repoName}`

      // route to page
      browserHistory.push(url)
    }
  }

  handleUpdateInput = (value) => this.setState({text: value.slice(0, 50)})

  handleRequest = (repoName) => {
    const {requestRepoInfo, repoOwner, repos, isLoggedIn} = this.props
    if (repos.length) {
      requestRepoInfo(repoOwner, repoName)
      this.props.resetSearch()
      this.setState({text: ''})
    } else if (isLoggedIn) {
      this.props.requestReposNames(this.state.text)
      this.setState({text: ''})
    } else {
      this.setState({text: ''})
    }
  }

  generateLabel() {
     const {repos, totalCount, repoSearchFailed, repoSearchLoading, isLoggedIn} = this.props
     if (!isLoggedIn) {
       return 'Login with GitHub...'
     } else if (repos.length) {
       return `Found ${totalCount} repos`
     } else if (repoSearchFailed) {
        return 'Search Failed, please try again'
     } else if (repoSearchLoading) {
        return 'Searching for repos...'
     } else {
        return 'Search Github Accounts'
     }
  }

  render() {
    const {repos} = this.props

    return (
      <div>
        <AutoComplete
          hintText={this.generateLabel()}
          filter={AutoComplete.fuzzyFilter}
          dataSource={repos}
          searchText={this.state.text}
          maxSearchResults={5}
          onNewRequest={this.handleRequest}
          onUpdateInput={this.handleUpdateInput}
        />
        <FlatButton
          label={repos.length ? 'New Search' : 'Search'}
          onTouchTap={this.handleRequest}
         />
      </div>
    )
  }
}

const {arrayOf, bool, number, shape, string, func, object} = PropTypes

SearchBar.propTypes = {
   isLoggedIn: bool.isRequired,
   requestReposNames: func.isRequired,
   requestRepoInfo: func.isRequired,
   totalCount: number.isRequired,
   repos: arrayOf(string.isRequired).isRequired,
   repoSearchLoading: bool.isRequired,
   repoSearchFailed: bool.isRequired,
   repoOwner: string.isRequired,
   repoName: string.isRequired,
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

export default SearchBar
