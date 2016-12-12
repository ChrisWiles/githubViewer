import gql from 'graphql-tag'

const GET_REPOS = gql `
  query GetRepos($login: String!) {
    repositoryOwner(login: $login) {
  		repositories(first: 30, orderBy: {field: UPDATED_AT, direction: DESC}) {
        totalCount
  		  edges {
  		    node {
  		      name
            stargazers {
              totalCount
            }
  		    }
  		  }
  		}
    }
  }
`
/*
  https://developer.github.com/early-access/graphql

  A "ref" (short for reference) is anything that points to a git commit.
  This could be a local branch, a tag, a remote branch, etc. So master,
  for example, would be considered a ref. In that vein, you can use the ref
  field on the Repository type to get a reference that targets a commit.
  From that commit, you can get all of the commit's parents.
  If you target master, you can get the main history of the git repository.
*/

const GET_REPO_INFO = gql `
  query GetRepoInfo($name: String!, $login: String!) {
    repositoryOwner(login: $login) {
      repository(name: $name) {
        description
        stargazers {
          totalCount
        }
        watchers {
          totalCount
        }
        ref(qualifiedName: "master") {
          target {
            ... on Commit {
              history(first: 30) {
                edges {
                  node {
                    message
                    author {
                      avatarURL
                      name
                      email
                      date
                      user {
                        login
                      }
                    }
                    comments (first: 30) {
                      totalCount
                      edges {
                        node {
                          body
                          author {
                            name
                            avatarURL
                            email
                            login
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const GET_OWNER_INFO = gql `
  query GetInfo($login: String!) {
    repositoryOwner(login: $login) {
      avatarURL
      ... on User {
        bio
        company
        email
        location
        name
        websiteURL
        login
        createdAt
        followers(first: 30) {
          edges {
            node {
              name
              login
              avatarURL
            }
          }
        }
        # organizations(first: 30) {
        #   totalCount
        #   edges {
        #     node {
        #       name
        #       avatarURL
        #     }
        #   }
        # }
        following(first: 30) {
          edges {
            node {
              name
              login
              avatarURL
            }
          }
        }
      }
    }
  }
`
export const getOwnerInfo = ({login}) => ({
  query: GET_OWNER_INFO,
  variables: {login}
})

export const getReposByLogin = ({login}) => ({
  query: GET_REPOS,
  variables: {login}
})

export const getRepoInfoByName = ({login, name}) => ({
  query: GET_REPO_INFO,
  variables: {login, name}
})
