import React, {PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'

import Drawer from 'material-ui/Drawer'
import {ListItem} from 'material-ui/List'
// import starBoarder from 'material-ui/svg-icons/toggle/star'
import Home from 'material-ui/svg-icons/action/home'
import SubRedditSearchBar from './SubRedditSearchBar'
import Project from 'material-ui/svg-icons/action/view-module'

const SlideDrawer = ({handleToggle, open, setTitle}) => (
   <Drawer
      width={300}
      docked={false}
      open={open}
      onRequestChange={e => handleToggle(e)}>

      {/* <div className='subHeader'>Type a subreddit name</div> */}
      <SubRedditSearchBar className='subHeader'/>
      <IndexLink to="/" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Subreddits" leftIcon={<Home/>} onTouchTap={e => setTitle('Subreddits')}/>
      </IndexLink>
      <Link to="/projects" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Projects" leftIcon={<Project/>} onTouchTap={e => setTitle('Projects')}/>
      </Link>
    </Drawer>
)

SlideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired
}

export default SlideDrawer
