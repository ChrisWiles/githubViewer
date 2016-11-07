import React, {PropTypes} from 'react'
import AutoComplete from 'material-ui/AutoComplete'

const SearchBar = (props) => (
  <AutoComplete
    floatingLabelText="Type a repo name"
    filter={AutoComplete.fuzzyFilter}
    dataSource={['one', 'two']}
    maxSearchResults={10}
  />
)

SearchBar.propTypes = {
  repos: PropTypes.string
}

export default SearchBar
