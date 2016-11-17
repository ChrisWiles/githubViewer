import React, {PropTypes} from 'react'


const RepositoryPage = ({repoInfo}) => {
  return (
    <p>{JSON.stringify(repoInfo)}</p>
  )
}


const {arrayOf, number, shape, string, object} = PropTypes

RepositoryPage.propTypes = {
   repoInfo: shape({
      commits: arrayOf(shape({
         avatarURL: string.isRequired,
         comments: object.isRequired,
         date: string.isRequired,
         email: string.isRequired,
         login: string.isRequired,
         message: string.isRequired,
         name: string.isRequired
      }).isRequired).isRequired,
      description: string.isRequired,
      stargazers: number.isRequired,
      watchers: number.isRequired
   }).isRequired
}

export default RepositoryPage
