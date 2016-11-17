import React, {PropTypes, Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import {browserHistory} from 'react-router'
import {genRandomReactLink} from '../reactLinksData'

// TODO: if searchbox is clicked and !loggedIn => popup login modal
// hmm add text input to redux state or not...

class SearchBar extends Component {
  state = {
    text: '',
    randomLink: genRandomReactLink()
  }

  componentWillReceiveProps({repoName, repoOwner, isLoggedIn}) {
    if(isLoggedIn && (!repoName && !repoOwner)) {

      const {login, name} = this.state.randomLink
      this.props.requestRepoInfo(login, name)
        .then(data => this.handleSuccessReq(login, name))
    }
    if(isLoggedIn && repoName && repoOwner) {
      this.handleSuccessReq(repoOwner, repoName)
    }
  }

  handleSuccessReq(login, name) {
    const url = `${login}/${name}`
    this.props.setNavBarTitle(url)
    browserHistory.push(`/${url}`)
  }

  handleUpdateInput = (value) => this.setState({text: value.slice(0, 50)})

  handleRequest = (repoName) => {
    console.log(repoName)
    const {requestRepoInfo, repoOwner, repos, isLoggedIn} = this.props
    if (repos.length) {
      requestRepoInfo(repoOwner, repoName.text || repoName)
      this.props.resetSearch()
    } else if (isLoggedIn) {
      this.props.setNavBarTitle(`/${this.state.text}`)
      this.props.requestReposNames(this.state.text)
    }
    this.setState({text: ''})
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

    const dataSource = repos.map(repo => {
      return {
        text: repo.name,
        value: (
          <MenuItem
            primaryText={repo.name}
            // rightIcon={<Chip>{repo.stargazer}</Chip>}
            // bug: secondaryText type coercion 0 to false and renders null
            secondaryText={repo.stargazers || '0'}
          />
        )
      }
    })

    return (
      <div>
        <AutoComplete
          hintText={this.generateLabel()}
          filter={AutoComplete.fuzzyFilter}
          dataSource={dataSource}
          searchText={this.state.text}
          maxSearchResults={10}
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
   setNavBarTitle: func.isRequired,
   isLoggedIn: bool.isRequired,
   requestReposNames: func.isRequired,
   requestRepoInfo: func.isRequired,
   totalCount: number.isRequired,
   repos: arrayOf(shape({
     name: string.isRequired,
     stargazers: number.isRequired
   })).isRequired,
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
