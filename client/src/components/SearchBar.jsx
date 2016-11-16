import React, {PropTypes, Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

import {browserHistory} from 'react-router'

class SearchBar extends Component {
  state = {
    text: ''
  }

  componentWillReceiveProps({repoName, repoOwner, repoInfo}) {
    if(repoInfo.commits) {
      const url = `/${repoOwner}/${repoName}`

      // route to page
      browserHistory.push(url)
    }
  }

  handleChange = (e) => this.setState({text: e.target.value.slice(0, 50)})

  handleSubmit = () => {
    if(this.state.text.length) {
      this.props.requestReposNames(this.state.text)
    }
    this.setState({text:''})
  }

  handleReset = () => this.props.resetSearch()

  handleRequest = (repoName) => {
    const {requestRepoInfo, repoOwner} = this.props
    requestRepoInfo(repoOwner, repoName)

  }

  generateLabel() {
    if (this.props.repoSearchFailed) {
      return 'Search Failed, please try again'
    } else {
      if (this.props.repoSearchLoading) {
        return 'Searching for repos...'
      } else {
        return 'Search Github Accounts'
      }
    }
  }



  renderSearch() {
    const {repos, totalCount} = this.props

    if(repos.length) {
      return (
        <div>
          <AutoComplete
            floatingLabelText={`Found ${totalCount} repos`}
            filter={AutoComplete.fuzzyFilter}
            dataSource={repos}
            maxSearchResults={5}
            onNewRequest={this.handleRequest}
          />
          <FlatButton label="New Search" onTouchTap={this.handleReset}/>
        </div>
      )
    } else {
      return (
        <div>
          <TextField
            floatingLabelText={this.generateLabel()}
            value={this.state.text}
            onChange={this.handleChange}
          />
          <FlatButton label="search" onTouchTap={this.handleSubmit}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderSearch()}
      </div>
    )
  }
}

const {arrayOf, bool, number, shape, string, func, object} = PropTypes

SearchBar.propTypes = {
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
