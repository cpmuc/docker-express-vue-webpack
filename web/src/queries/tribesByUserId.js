import gql from 'graphql-tag'

export const tribesByUserId = (userId) => {
  return {
    query: gql`query Tribes($userId: Int) {
      tribes(where: {user_tribes: {user_id: {_eq: $userId}}}) {
        name
        id
        }
      },
    `,
    variables: {
      userId,
    }
  }
}
