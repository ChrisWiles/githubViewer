import React, {PropTypes} from 'react'
import CircularProgress from 'material-ui/CircularProgress'
import data from '../queries/dummyData'

const style = {
  root: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  }
}

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
        {console.log(data)}
      </div>
    )
  }
}



OwnerPage.propTypes = {
  loading: PropTypes.bool.isRequired
}
export default OwnerPage
