import gql from 'graphql-tag'

export const postById = (postId) => {
 return {
    query: gql`query Post($postId: Int) {
      posts(where: {id: {_eq: $postId}}) {
        title
      }
    }
    `,
    variables: {
      postId,
    }
  } 
} 