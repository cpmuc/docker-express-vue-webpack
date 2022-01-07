import gql from 'graphql-tag'

export const postsByUserId = (userId) => {
  return {
    query: gql`query Posts($userId: Int) {
      posts(where: {user: {_eq: $userId}}) {
          id
          title
        }
      },
    `,
    variables: {
      userId,
    }
  }
}
