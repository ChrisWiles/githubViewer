import React, {Component} from 'react'

import NavBar from '../components/NavBar'
import SlideDrawer from '../components/SlideDrawer'

import axios from 'axios'



let query = `{
  user(username: "kn0thing") {
    username
    commentKarma
    createdISO
  }
  subreddit(name: "movies"){
    newListings(limit: 2) {
      title
      comments {
        body
        author {
          username
          commentKarma
        }
      }
    }
  }
}`

fetch(`http://localhost:3001/reddit`, {
    accept: 'application/json',
  }).then(a => console.log(a))
    .catch(e => console.log(e))
  
axios(`/reddit`)
  .then(a => console.log(a))
  .catch(e => console.log(e))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: 'Subreddits'
    }
  }

  handleToggle = () =>   this.setState({open: !this.state.open})

  setTitle = title => this.setState({title})

  render() {
    const {title, open} = this.state
    return (
      <div>
        <NavBar handleToggle={this.handleToggle} title={title}/>
        <SlideDrawer handleToggle={this.handleToggle} open={open} setTitle={this.setTitle}/>
        {/* child component will be rendered here */}
        {this.props.children}

      </div>
    )
  }
}

export default App
