import React, {Component} from 'react'
import {connect} from 'react-redux'

import NavBar from '../components/NavBar'
import SlideDrawer from '../components/SlideDrawer'

import {requestLogin} from '../actionCreators/loginActions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: '',
      isLogin: false
    }
    this.props.requestLogin()
  }

  handleToggle = () => this.setState({open: !this.state.open})
  toggleLogin = () => this.setState({isLogin: !this.state.isLogin})

  setTitle = title => this.setState({title})

  render() {

    const {title, open} = this.state
    return (
      <div>
        <NavBar handleToggle={this.handleToggle} title={title} toggleLogin={this.toggleLogin} isLogin={this.state.isLogin}/>

        <SlideDrawer handleToggle={this.handleToggle} open={open} setTitle={this.setTitle}/>
        {/* child component will be rendered here */}
        {this.props.children}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log({...state.repos})
  return {...state.login}
}

export default connect(
  mapStateToProps, {
    requestLogin
  }
)(App)
