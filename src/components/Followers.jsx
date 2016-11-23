import React, {PropTypes} from 'react'

const style = {
  avatar: {
    borderRadius: 'none'
  },
  root: {
    marginRight: 10,
    display: 'block'
  }
}

const Followers = ({followers}) => (
  <div style={style.root}></div>
)

Followers.propTypes = {
  followers: PropTypes.array.isRequired
}

export default Followers
