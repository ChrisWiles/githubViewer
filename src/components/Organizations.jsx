import React, {PropTypes} from 'react'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'

const style = {
  avatar: {
    borderRadius: 'none'
  },
  root: {
    position: 'fixed',
    marginTop: 171,
    marginLeft: -13
  }
}

const Organizations = ({organizations}) => (
  <div style={style.root}>
    {
      organizations.map((org, i) => {
        const {name, avatarURL} = org
        return (
          <IconButton tooltip={name} key={i}>
            <Avatar src={avatarURL} style={style.avatar} backgroundColor='none'/>
          </IconButton>
        )
      })
     }
  </div>
)

Organizations.propTypes = {
  organizations: PropTypes.array.isRequired
}
export default Organizations
