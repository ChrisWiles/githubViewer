const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 3001))
console.log(process.env.PORT)
// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

import { Reddit } from 'graphqlhub-schemas'
import { GraphQLSchema, graphql } from 'graphql'

let schema = new GraphQLSchema({
  query: Reddit.QueryObjectType
})
let query = `{
  user(username: "kn0thing") {
    username
    commentKarma
    createdISO
  }
  subreddit(name: "movies"){
    newListings(limit: 2) {
      title
      comments {
        body
        author {
          username
          commentKarma
        }
      }
    }
  }
}`
app.get('/reddit', (req, res) => {
 //  const param = req.query.q
 //
 // if (!param) {
 //   res.json({
 //     error: 'Missing required parameter `q`',
 //   })
 //   return
 // }
 graphql(schema, query)
   .then(data => res.send(data))
   .catch(err => console.log(err))
})

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
