# Github Viewer

A React/Redux UI consuming the GitHub GraphQL API

See Live [Github Viewer](https://Github-Viewer.herokuapp.com/)


## User Story

* Users should be able to type facebook/react into a search field and have it added to a favorites list.

* The user should be able to remove a repo for the favorites list.

* Each favorite will display the name of the repository, the number of stars that repository has and the last 3 commits to that repository.

* Each of the commits should display the author’s name and the commit message as well as how long ago it occurred (ex: ‘7 days ago’)

* Clicking the author’s name should go to a separate page that displays the authors info (React Router).

* Author’s info page should display their profile data creatively but should include at least their name, avatar, bio, number of followers and how long they have been on github.

* If the user leaves the application and returns later they should be able to see the repositories as they were the last time they visited.

App Bar
  - Search repositories
    - move to Repository Page

Home Page
  - Featured (Repository Page)

Repository Page - Name, Stars, commit messages
  - React router change url
  - typing url should go to page


Favorites List (Side Bar)
  - Remove favorites
  - Click to go to (Repository Page)


Author Info page
  - Name, avatar, bio, number of followers, signup date


## Tech

- [React](https://facebook.github.io/react/docs/getting-started.html) - Open-source JavaScript library providing a view for data rendered as HTML
- [Redux](https://github.com/reactjs/redux) - Predictable state container for JavaScript apps
- [React Router](https://github.com/ReactTraining/react-router/tree/master/docs) - React Router is a complete routing library for React. React Router keeps your UI in sync with the URL
- [Heroku](https://devcenter.heroku.com/categories/reference) - Create, deploy, and manage apps in the cloud
- [Material UI](http://www.material-ui.com/) - Google's material design UI components built with React.
- [GitHub GraphQL API](https://developer.github.com/early-access/graphql/) - Api Documentation
- [GraphQL](http://graphql.org/) - GraphQL is a new way to think about building and querying APIs. Rather than construct several REST requests to fetch data that you're interested in, you can often make a single call to fetch the information you need.
- [apollo](http://docs.apollostack.com/apollo-client/) - A fully-featured caching GraphQL client for any server or UI framework
- [foreman](https://github.com/strongloop/node-foreman) - Foreman is a manager for Procfile-based applications. Its aim is to abstract away the details of the Procfile format, and allow you to either run your application directly or export it to some other process management format.

http://dev.apollodata.com/react/redux.html
https://dev-blog.apollodata.com/apollo-client-graphql-with-react-and-redux-49b35d0f2641#.4ijzk0975
https://blog.callstack.io/how-to-write-amazing-react-native-applications-with-apollo-react-4dabeec6b317#.1oxx29uzz
https://dev-blog.apollodata.com/seamless-integration-for-graphql-and-react-6ffc0ad3fead#.jfynopekp

## Installation

Requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```


![gif](http://i.imgur.com/chriswiles.gif)
