import gql from 'graphql-tag'

const GET_REPO_INFO = gql `
  query GetRepositoryIssues($name: String!, $login: String!) {
    repositoryOwner(login: $login) {
      repository(name: $name) {
        stargazers {
          totalCount
        }
        watchers {
          totalCount
        }
      }
    }
  }
`

// const GetRepositoryInfo = ({name, login}) => ({
//   query: GET_REPO_INFO,
//   variables: {
//     name,
//     login
//   }
// })

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
