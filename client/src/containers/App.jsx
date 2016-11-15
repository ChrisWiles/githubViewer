import React, {Component} from 'react'
import {connect} from 'react-redux'

import NavBar from '../components/NavBar'
import SlideDrawer from '../components/SlideDrawer'
import SmartSearchLogin from './SmartSearchBar'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: ''
    }
  }

  componentWillReceiveProps(props) {}

  handleToggle = () => this.setState({open: !this.state.open})

  setTitle = title => this.setState({title})

  render() {
    const {title, open} = this.state
    return (
      <div>
        {/* <NavBar handleToggle={this.handleToggle} title={title}/> */}
        <SmartSearchLogin/>
        <SlideDrawer handleToggle={this.handleToggle} open={open} setTitle={this.setTitle}/>
        {/* child component will be rendered here */}
        {this.props.children}

      </div>
    )
  }
}

//const AppWithInfo = withInfo(App)
const mapStateToProps = (state) => {
  console.log(state)
  return state
}

//export default connect(mapStateToProps)(AppWithInfo)
export default App
