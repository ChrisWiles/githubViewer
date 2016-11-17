import React, {Component, PropTypes} from 'react'
import TextField from 'material-ui/TextField'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import {blue500} from 'material-ui/styles/colors'
import GitHubIcon from './GitHubIcon'

const styles = {
  errorStyle: {
    color: blue500
  },
  loginWindow: {
    margin: '20px 100px',
    minWidth: 400,
    maxWidth: 450
  },
  buttonDiv: {
    justifyContent: 'center',
    display: 'flex'
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
        <Card style={{width: '100%'}}>
          <CardHeader title="Login Page"/>
          <CardText>
            <TextField
              hintText="Username"
              errorText={this.state.userError}
              hintStyle={styles.errorStyle}
              value={this.state.user}
              onChange={this.handleChangeUser}
             />
            <br/>
            <br/>
            <TextField
              hintText="Password"
              type="password"
              errorText={this.state.passError}
              hintStyle={styles.errorStyle}
              value={this.state.pass}
              onChange={this.handleChangePass}
            />
            <br/>
            <div style={styles.buttonDiv}>
              <RaisedButton
                label="Login"
                primary={true}
                onTouchTap={this.handleSubmit}
                icon={<GitHubIcon/>}
              />
            </div>
          </CardText>
        </Card>
      </div>
    )
  }
}

Login.propTypes = {
  requestLogin: PropTypes.func.isRequired
}

export default Login
