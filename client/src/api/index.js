import axios from 'axios'

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

axios.post('/reddit', {query}).then(a => console.log(a))
