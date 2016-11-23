// data comes from https://raw.githubusercontent.com/enaqx/awesome-react/master/README.md

// const links = data
//   .split('(')
//   .filter(d => d.slice(0,18) === 'https://github.com')
//   .join(')')
//   .split(')')
//   .filter(d => d.slice(0,18) === 'https://github.com')
//   .join('')
//   .split('https://github.com/')
//   .map(d => {
//     const text = d.split('/')
//     return {login: text[0], name: text[1]}
//   })
//   .filter(link => link.name)
//   .sort((a, b) => {
//     if(a.login < b.login) return -1
//     if(a.login > b.login) return 1
//     return 0
//   })
//   .filter(item => item.name.includes('.'))

const list = [
  {
    login: 'facebook',
    name: 'flux'
  }, {
    login: 'facebook',
    name: 'relay'
  }, {
    login: 'facebook',
    name: 'graphql'
  }, {
    login: 'facebook',
    name: 'react-devtools'
  }, {
    login: 'reactjs',
    name: 'react-art'
  }, {
    login: 'facebook',
    name: 'react-native'
  }, {
    login: 'facebook',
    name: 'react-native-fbsdk'
  }, {
    login: 'facebook',
    name: 'immutable-js'
  }, {
    login: 'facebook',
    name: 'jscodeshift'
  }, {
    login: 'facebook',
    name: 'flow'
  }, {
    login: 'facebook',
    name: 'react'
  }, {
    login: 'facebookincubator',
    name: 'create-react-app'
  }, {
    login: 'gaearon',
    name: 'redux-thunk'
  }, {
    login: 'gaearon',
    name: 'redux'
  }, {
    login: 'gaearon',
    name: 'react-transform-hmr'
  }, {
    login: 'gaearon',
    name: 'react-document-title'
  }, {
    login: 'gaearon',
    name: 'react-dnd'
  }, {
    login: 'gaearon',
    name: 'redux-devtools'
  }, {
    login: 'gajus',
    name: 'redux-immutable'
  }
]

  export const genRandomReactLink = () => list[Math.floor(Math.random() * list.length)]
