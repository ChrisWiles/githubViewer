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

const Following = ({followers}) => (
  <div style={style.root}></div>
)

Following.propTypes = {
  followers: PropTypes.array.isRequired
}

export default Following
