import React, {Component} from 'react'
import {connect} from 'react-redux'
import NavBar from '../components/NavBar'
import SlideDrawer from '../components/SlideDrawer'
import {graphql} from 'react-apollo'

import gql from 'graphql-tag'

const GET_REPO_INFO = gql `
  query GetRepoInfo($name: String!, $login: String!) {
    repositoryOwner(login: $login) {
      repository(name: $name) {
        stargazers {
          totalCount
        }
        watchers {
          totalCount
        }
        createdAt
        description
        url
        commitComments(first: 10) {
          edges {
            node {
              author {
                avatarURL
                name
              }
              body
              commit {
                message
  							committer {
                  date
                }
              }
            }
          }
        }
      }
    }
  }
`

const withInfo = graphql(GET_REPO_INFO, {
  options: ({login, name}) => {
    return {
      variables: {
        login: 'facebook',
        name: 'react'
      }
    }
  },
  props: ({ownProps, data}) => {
    // loading state
    if (data.loading) {
      return {loading: true}
    }

    // error state
    if (data.error) {
      return { hasErrors: true }
    }
    return {data}
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      title: ''
    }
  }

  componentWillReceiveProps(props) {
    console.log(props.data.repositoryOwner.repository)
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

const AppWithInfo = withInfo(App)
const mapStateToProps = (state) => {
  console.log(state)
  return state
}

export default connect(mapStateToProps)(AppWithInfo)
