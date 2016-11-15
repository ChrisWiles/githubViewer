import React, {PropTypes, Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'


// Type github login...
// Searching for Repos...
// Found x repos
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

  renderSearch() {
    if(this.props.repos.length) {
      return (
        <div>
          <AutoComplete
            floatingLabelText={`Found ${this.props.totalCount} repos`}
            filter={AutoComplete.fuzzyFilter}
            dataSource={this.props.repos}
            maxSearchResults={5}
          />
          {/* call redux fumction to reset search */}
          <FlatButton label="New Search" onTouchTap={this.handleReset}/>
        </div>
      )
    } else {
      return (
        <div>
          <TextField
            floatingLabelText="Search Github Accounts"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <FlatButton label="search" onTouchTap={this.handleSubmit}/>
        </div>
      )
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderSearch()}
      </div>
    )
  }
}


SearchLogin.propTypes = {
  requestReposNames: PropTypes.func.isRequired,
  totalCount: PropTypes.number.isRequired,
  repos: PropTypes.array.isRequired
}

export default SearchLogin
