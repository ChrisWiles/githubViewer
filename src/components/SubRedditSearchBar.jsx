import React, {PropTypes} from 'react'
import {Reddit} from 'graphqlhub-schemas'
import AutoComplete from 'material-ui/AutoComplete'

const subreddits = [ 'Apple', 'Apricot', 'Avocado', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Blood Orange', 'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry', 'Coconut', 'Cranberry', 'Clementine', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava', 'Honeydew', 'Huckleberry', 'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry', 'Kiwi fruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Lychee', 'Nectarine', 'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine', 'Olive', 'Orange', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple', 'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen', 'Quince', 'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant', 'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry', 'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine', 'Ugli fruit', 'Watermelon', ]

const SubRedditSearchBar = (props) => (
  <AutoComplete
    floatingLabelText="Type 'peah', fuzzy search"
    filter={AutoComplete.fuzzyFilter}
    dataSource={subreddits}
    maxSearchResults={5}
  />
)

SubRedditSearchBar.propTypes = {
  subreddit: PropTypes.string
}

export default SubRedditSearchBar
