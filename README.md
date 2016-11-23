# Github Viewer

Uses Apollo to connect the client with GitHub’s GraphQL. The queries are saved into the redux store and the UI is rendered with React and Material UI components.

See Live [Github Viewer](https://chriswiles.github.io/githubViewer)


## User Story

* Users should be able to type a github login and get a list of repositories

* Select a repo to see info and commit history

* Each of the commits should display the author’s name and the commit message as well as how long ago it occurred

* Clicking the author’s name should go to a separate page that displays the authors info

## Tech

- [Apollo Client](http://docs.apollostack.com/apollo-client/) - A simple caching client for any GraphQL server and UI framework built on top of Redux
- [GitHub GraphQL API](https://developer.github.com/early-access/graphql/) - API documentation
- [GraphQL](http://graphql.org/) - GraphQL is a new way to think about building and querying APIs. Rather than construct several REST requests to fetch data that you're interested in, you can often make a single call to fetch the information you need.
- [Heroku](https://devcenter.heroku.com/categories/reference) - Create, deploy, and manage apps in the cloud
- [Material UI](http://www.material-ui.com/) - Google's material design UI components built with React.
- [React Router](https://github.com/ReactTraining/react-router/tree/master/docs) - React Router is a complete routing library for React. React Router keeps your UI in sync with the URL
- [React](https://facebook.github.io/react/docs/getting-started.html) - Open-source JavaScript library providing a view for data rendered as HTML
- [Redux-Thunk](https://github.com/gaearon/redux-thunk) - The easiest way to write async action creators
- [Redux](https://github.com/reactjs/redux) - Predictable state container for JavaScript apps
- [moment](http://momentjs.com/) - Parse, validate, manipulate, and display dates in JavaScript.

## Heroku
```sh
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git push heroku master
```

## Installation

Requires [Node.js](https://nodejs.org/) v6+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
$ npm start
```


![Imgur](http://i.imgur.com/4o2p9q6.gif)
