import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {blue500} from 'material-ui/styles/colors'
import GitHubIcon from './GitHubIcon'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'

const styles = {
  errorStyle: {
    color: blue500
  },
  loginWindow: {
    margin: '20px 100px',
    minWidth: 400,
    maxWidth: 800,
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
    passError: '',
    userError: ''
  }

  handleChangePass = (e) => this.setState({pass: e.target.value})
  handleChangeUser = (e) => this.setState({user: e.target.value})

  handleSubmit = () => {
    const {pass, user} = this.state
    this.props.requestLogin(user, pass)
    this.setState({pass: '', user: ''})
  }

  render() {
    return (
      <div style={styles.loginWindow}>
        <Paper style={styles.paper} zDepth={1}>
          <AppBar title="Welcome" showMenuIconButton={false}/>
          <div>
            <br/>
            <TextField
              hintText="Username"
              errorText={this.state.userError}
              hintStyle={styles.errorStyle}
              value={this.state.user}
              onChange={this.handleChangeUser}/>
            <br/>
            <br/>
            <TextField
              hintText="Password"
              type="password"
              errorText={this.state.passError}
              hintStyle={styles.errorStyle}
              value={this.state.pass}
              onChange={this.handleChangePass}/>
            <br/>
            <br/>
            <RaisedButton
              style={styles.signInButton}
              label="Login"
              primary={true}
              onTouchTap={this.handleSubmit}
              icon={< GitHubIcon />}/>
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
