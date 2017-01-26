

Smart/Container Component Characteristics

- Describe how things work
- Provide no DOM markup or styles
- Provide application data, do data fetching
- Top level

Dumb/Presentational Component Characteristics

- Describe how things look
- Low Level
- Have no app dependencies
- Receive only props, providing data and callbacks
- Rarely have own state, when they do, it’s just UI state

Stateless Functional Components (Dumb/Presentational)

- Destructure your props in ES6
- Should state their dependencies. PropType validation is great for this.
- Will soon offer improved performance, no state or lifecycle methods. React team working on.
- Testable:view only renders according to the props passed down

Reusable UI Components

- Dumb/Presentational components
- Often are stateless functional components
- Composing higher-order components
- Styling components based on state or props
- React.PropTypes.node, props.children
- Third-party UI components (Material-UI & React-Bootstrap)
- Don't repeat yourself (DRY)
- Generic & Flexible  
- Building blocks


# Github Viewer
## A React/Redux UI consuming the GitHub GraphQL API


      |   createApolloClient.js
      |   darkTheme.js
      |   index.css
      |   index.js
      |   material_ui_raw_theme_file.jsx
      |   reactLinksData.js
      |   README.md
      |   routes.js
      |   
      +---actionCreators
      |       contactSnackbarActions.js
      |       loginActions.js
      |       ownerActions.js
      |       repoActions.js
      |       UIActions.js
      |       
      +---components
      |       App.jsx
      |       CommitsList.jsx
      |       ContactSnackbar.jsx
      |       FollowList.jsx
      |       GitHubIcon.jsx
      |       Login.jsx
      |       NavBar.jsx
      |       Organizations.jsx
      |       OwnerContent.jsx
      |       OwnerPage.jsx
      |       RepositoryPage.jsx
      |       SearchBar.jsx
      |       SlideDrawer.jsx
      |       SlideDrawerMenu.jsx
      |       
      +---constants
      |       actionTypes.js
      |       
      +---containers
      |       SmartApp.js
      |       SmartOwnerPage.js
      |       SmartRepositoryPage.js
      |       SmartSearchBar.js
      |       
      +---queries
      |       index.js
      |       
      \---reducers
            contactSnackbarReducer.js
            index.js
            loginReducer.js
            ownerReducer.js
            repoReducer.js
            UIReducer.js


## Flow 
```
    // User searches 'facebook'

    SearchBar.jsx (Smart) -> Fire Actions  {
      requestReposNames() => Redux Thunk (async) -> REPO_OWNER_REQUEST -> repoReducer.js (pure function) -> update UI State 
          Redux Thunk (pass) -> REPO_OWNER_SUCCESS -> update UI State 
          Redux Thunk (fail) -> REPO_OWNER_FAILURE -> update UI State 
        
        REPO_OWNER_SUCCESS -> {
          isLoading: false
          repos: [data]
        }
        setNavBarTitle() => NAVBAR_TITLE -> UIReducer.js -> update UI State
    }

    // User selects 'react'

    SearchBar(Smart) -> Fire Actions {
      requestRepoInfo() => Redux Thunk (async) -> REPO_NAME_REQUEST -> repoReducer.js (pure function) -> update UI State
          Redux Thunk (pass) -> REPO_NAME_SUCCESS -> update UI State
          Redux Thunk (fail) -> REPO_NAME_FAILURE -> update UI State 
            
            (pass) update UI State -> {
            isLoading: false
            repoInfo: {data}
                
                RepositoryPage(Smart).jsx -> pass new state -> CommitsList(Dumb).jsx
            }
        
        setNavBarTitle() => NAVBAR_TITLE -> UIReducer.js -> update UI State
        resetSearch() => RESET_SEARCH -> UIReducer.js -> update UI State
    }
 ```
## RepositoryPage.jsx
 ```javascript
    const style = {
      root: {
        margin: '20px 100px',
        display: 'flex',
        justifyContent: 'center'
      },
      title: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '1.33em',
        color: '#05828F',
        fontWeight: 800
      },
      description: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '1.33em'
      },
      iconButton: {
        marginTop: '-12px',
        marginRight: '-10px'
      }
    }

    const RepositoryPage = ({repoInfo, title, loading, setNavBarTitle, requestOwner}) => {
      if (loading) {
        return (
          <div style={style.root}>
            <CircularProgress size={3}/>
          </div>
        )
      } else {
        return (
          <div style={style.root}>

            <Paper zDepth={2}>
              <div style={style.title}>
                {title}
                <IconButton tooltip="Stargazers" style={style.iconButton}>
                  <Star color={'#05828F'} hoverColor={'#f50057'}/>
                </IconButton>
                {repoInfo.stargazers}
              </div>

              <div style={style.description}>
                {repoInfo.description}
              </div>

              <Divider/>
              <h4 style={{textAlign: 'center'}}>Commits</h4>
              <Divider/>

              <CommitsList commits={repoInfo.commits} setNavBarTitle={setNavBarTitle} requestOwner={requestOwner}/>
            </Paper>
          </div>
        )
      }
     }
    }
 ```
## CommitsList.jsx
 ```javascript
     const style = {
      root: {
        display: 'flex',
        justifyContent: 'center'
      },
      commit: {
        display: 'inlineFlex'
      },
      avatar: {
        margin: '5px',
        position: 'absolute'
      },
      header: {
        display: 'inline',
      },
      msg: {
        color: "rgba(255, 255, 255, 0.44)",
        display: 'block',
        marginTop: '20px',
        marginBottom: '8px'
      },
      text: {
        marginLeft: '64px'
      }
    }

    const CommitsList = ({commits, setNavBarTitle, requestOwner}) => {

      const handleClick = (login) => {
        if(login) {
          requestOwner(login).then(data => {
            browserHistory.push(`/${login}`)
            setNavBarTitle(login)
          })
        }
      }

      const listItems = commits.map((commit, i) => (
        <Paper zDepth={0} key={i} style={style.commit}>
          <IconButton tooltip={commit.name} style={{position: 'absolute'}} onTouchTap={handleClick.bind(this, commit.login)}>
            <Avatar src={commit.avatarURL} style={style.avatar}/>
          </IconButton>
            <div style={style.text}>
              <div style={style.header}>
                {`${commit.login} <${commit.email}> commited ${moment(commit.date).fromNow()}`}
              </div>
              <div style={style.msg}>
                {commit.message.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            </div>
          <Divider/>
        </Paper>
      ))

      return (
        <div style={style.root}>
          <Paper zDepth={2}>
            {listItems}
          </Paper>
        </div>
      )
    }
```
## SmartRepositoryPage.js
```javascript
    const mapStateToProps = (state) => ({
      ...state.repos,
      title: state.ui.repoURL
    })

    export default connect(
      mapStateToProps, {
        setNavBarTitle,
        requestOwner
      }
    )(RepositoryPage)
 ```
## loginReducer.js
 ```javascript
    const initialState = {
      isLoggedIn: false,
      loginFailure: false,
      isLoggingIn: false
    }

    function login(state = initialState, action) {

      switch (action.type) {
        case LOGIN_REQUEST:
          return {
            ...state,
            isLoggingIn: true,
            loginFailure: false
          }
        case LOGIN_SUCCESS:
          return {
            ...state,
            isLoggingIn: false,
            isLoggedIn: true
          }
        case LOGIN_FAILURE:
          return {
            ...state,
            isLoggingIn: false,
            loginFailure: true
          }
        default:
          return state
      }
    }
  ```
  
## repoActions.js
  ```javascript
    export const requestReposNames = (login) => {
      return dispatch => {
        dispatch({type: REPO_OWNER_REQUEST, login})
        return client.query(getReposByLogin({login}))
          .then(data => dispatch({type: REPO_OWNER_SUCCESS, payload: data}))
          .catch(err => dispatch({type: REPO_OWNER_FAILURE, err}))
      }
    }

    export const requestRepoInfo = (login, name) => {
      return dispatch => {
        dispatch({type: REPO_NAME_REQUEST, name})
        return client.query(getRepoInfoByName({login, name}))
          .then(data => dispatch({type: REPO_NAME_SUCCESS, payload: data}))
          .catch(err => dispatch({type: REPO_NAME_FAILURE, err}))
      }
    }
```
## graphql query
```javascript
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
 ```
## darkTheme.js
 ```javascript
        {
            "spacing": {
                "iconSize": 24,
                "desktopGutter": 24,
                "desktopGutterMore": 32,
                "desktopGutterLess": 16,
                "desktopGutterMini": 8,
                "desktopKeylineIncrement": 64,
                "desktopDropDownMenuItemHeight": 32,
                "desktopDropDownMenuFontSize": 15,
                "desktopDrawerMenuItemHeight": 48,
                "desktopSubheaderHeight": 48,
                "desktopToolbarHeight": 56
            },
            "fontFamily": "Roboto, sans-serif",
            "palette": {
                "primary1Color": "#0097a7",
                "primary2Color": "#0097a7",
                "primary3Color": "#757575",
                "accent1Color": "#ff4081",
                "accent2Color": "#f50057",
                "accent3Color": "#ff80ab",
                "textColor": "#CCCCCC",
                "secondaryTextColor": "rgba(255, 255, 255, 0.7)",
                "alternateTextColor": "#202020",
                "canvasColor": "#202020",
                "borderColor": "rgba(255, 255, 255, 0.3)",
                "disabledColor": "rgba(255, 255, 255, 0.3)",
                "pickerHeaderColor": "rgba(255, 255, 255, 0.12)",
                "clockCircleColor": "rgba(255, 255, 255, 0.12)",
                "shadowColor": "rgba(0, 0, 0, 1)"
            },
            "themeName": "Dark Theme",
            "listItem": {
                "secondaryTextColor": "#CCCCCC"
            },
            "toolbar": {
                "backgroundColor": "#202020"
            },
            "snackbar": {
                "textColor": "#ff4081",
                "backgroundColor": "rgba(0, 0, 0, 0.54)"
            }
        }
  ```
![Redux Flow](https://camo.githubusercontent.com/5aba89b6daab934631adffc1f301d17bb273268b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6d656469612d702e736c69642e65732f75706c6f6164732f3336343831322f696d616765732f323438343535322f415243482d5265647578322d7265616c2e676966)
