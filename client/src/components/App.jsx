import React, {Component} from 'react'
import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'

// const App = ({children, }) => {
//
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: ''
    }
  }

  handleToggle = () => this.setState({open: !this.state.open})

  setTitle = title => this.setState({title})

  handleLogin = () => this.props.requestLogin()

  render() {

    const {title, open} = this.state
    return (
      <div>
        <NavBar handleToggle={this.handleToggle} handleLogin={this.handleLogin} title={title} isLogin={this.props.isLoggedIn}/>

        <SlideDrawer handleToggle={this.handleToggle} open={open} setTitle={this.setTitle}/>
        {/* child component will be rendered here */}
        {this.props.children}

      </div>
    )
  }
}

export default App
