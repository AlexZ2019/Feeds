import gql from 'graphql-tag';

export const DELETE_FEED_MUTATION = gql`
  mutation DeleteFeed($id: Float!) {
    deleteFeed(id: $id)
  }
`;
