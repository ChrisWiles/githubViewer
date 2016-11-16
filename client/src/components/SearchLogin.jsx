import React, {PropTypes, Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

class SearchLogin extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => this.setState({text: e.target.value})

  handleSubmit = () => {
    this.props.requestReposNames(this.state.text)
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

SearchLogin.propTypes = {
  requestReposNames: PropTypes.func.isRequired,
  requestRepoInfo: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  repos: PropTypes.array.isRequired,
  repoSearchLoading: PropTypes.bool.isRequired,
  repoSearchFailed: PropTypes.bool.isRequired,
  repoOwner: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  repoInfo: PropTypes.object.isRequired
}

export default SearchLogin
