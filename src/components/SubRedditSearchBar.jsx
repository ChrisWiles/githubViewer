import React, {PropTypes} from 'react'
import AutoComplete from 'material-ui/AutoComplete'

import subreddits from '../data/subreddits'


// import * as Reddit from '../api/schema'
//
// import { GraphQLSchema, graphql } from 'graphql'
//
// let schema = new GraphQLSchema({
//   query: Reddit.QueryObjectType
// })
//
// let query = ' { user(username: "kn0thing") { username } } '
// graphql(schema, query).then((result) => {
//   console.log(result)
// })
//



const SubRedditSearchBar = (props) => (
  <AutoComplete
    floatingLabelText="Type a subreddit name"
    filter={AutoComplete.fuzzyFilter}
    dataSource={subreddits}
    maxSearchResults={10}
  />
)

SubRedditSearchBar.propTypes = {
  subreddit: PropTypes.string
}

export default SubRedditSearchBar
