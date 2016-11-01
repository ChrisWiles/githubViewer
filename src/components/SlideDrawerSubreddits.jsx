import React, {PropTypes} from 'react'
import MenuItem from 'material-ui/MenuItem'

const SlideDrawerSubreddits = (props) => (
  <div>
    <MenuItem>Subreddit</MenuItem>
    <MenuItem>Subreddit 2</MenuItem>
  </div>
)

SlideDrawerSubreddits.propTypes = {
  subreddit: PropTypes.string
}

export default SlideDrawerSubreddits
