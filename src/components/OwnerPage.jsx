import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const OwnerPage = ({loading}) => {
  if(loading) {
    return (
      <div style={style.root}>
         <CircularProgress size={3} />
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}



OwnerPage.propTypes = {

}
export default OwnerPage
