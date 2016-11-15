import React, {PropTypes, Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'



class SearchLogin extends Component {
  state = {
    text: ''
  }

  handleChange = e => this.setState({text: e.target.value})

  handleSubmit = e => {
    console.log(this.state.text)
    this.props.requestReposNames(this.state.text) // redux action
    this.setState({text:''})
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <TextField
          hintText="Github Account"
          floatingLabelText="Github Account"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <FlatButton label="search" onTouchTap={this.handleSubmit}/>
      </div>
    )
  }
}


// should list all repos for account
const SearchBar = ({edges, totalCount}) => {
  const repoNames = repos => {
    return repos ? repos.map(repo => repo.node.name) : []
  }

  return (
    <AutoComplete
      floatingLabelText="Type a repo name"
      filter={AutoComplete.fuzzyFilter}
      dataSource={repoNames(edges)}
      maxSearchResults={5}
    />
  )
}

// SearchBar.propTypes = {
//   edges: PropTypes.array,
//   totalCount: PropTypes.number
// }

export default SearchLogin

// Type github login...
// Searching for Repos...
// Found x repos
