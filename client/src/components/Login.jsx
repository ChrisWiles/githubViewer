import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {blue500} from 'material-ui/styles/colors'
import GitHubIcon from './GitHubIcon'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'

const styles = {
  loginWindow: {
    margin: '20px 100px',
    display: 'flex',
    justifyContent: 'center'
  },
  buttonDiv: {
    justifyContent: 'center',
    display: 'flex'
  },
  paper: {
    width: 400,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  },
  signInButton: {
    width: 256,
    margin: 15
  }
}


// https://developer.github.com/early-access/graphql/
// https://developer.github.com/early-access/
// https://github.com/prerelease/agreement
class Login extends Component {
  state = {
    pass: '',
    user: '',
    userError: '',
    passError: ''
  }

  handleChangePass = (e) => this.setState({pass: e.target.value})
  handleChangeUser = (e) => this.setState({user: e.target.value})

  handleSubmit = () => {
    const {pass, user} = this.state
    if(pass && user) {
      this.props.requestLogin(user, pass)
      this.setState({pass: '', user: '', passError: '', userError: ''})
    } else if (pass){
      this.setState({userError: 'Missing Field'})
    } else {
      this.setState({passError: 'Missing Field'})
    }
  }

  handleKeyUp = (e) => e.keyCode === 13 && this.handleSubmit()

  render() {
    return (
      <div style={styles.loginWindow}>
        <Paper style={styles.paper} zDepth={1}>
          <AppBar title="Welcome" showMenuIconButton={false}/>
          <div onKeyUp={this.handleKeyUp}>
            <br/>
            <TextField
              hintText="Username"
              errorText={this.state.userError}
              hintStyle={styles.hintStyle}
              value={this.state.user}
              onChange={this.handleChangeUser}/>
            <br/>
            <br/>
            <TextField
              hintText="Password"
              type="password"
              errorText={this.state.passError}
              hintStyle={styles.hintStyle}
              value={this.state.pass}
              onChange={this.handleChangePass}/>
            <br/>
            <br/>
            <RaisedButton
              style={styles.signInButton}
              label="Login"
              primary={true}
              onTouchTap={this.handleSubmit}
              icon={<GitHubIcon/>}/>
            <br/>
          </div>
        </Paper>
      </div>
    )
  }
}

Login.propTypes = {
  requestLogin: PropTypes.func.isRequired
}

export default Login
