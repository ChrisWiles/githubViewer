import React, {Component} from 'react'

import NavBar from '../components/NavBar'
import SlideDrawer from '../components/SlideDrawer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: 'GitHub'
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

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
