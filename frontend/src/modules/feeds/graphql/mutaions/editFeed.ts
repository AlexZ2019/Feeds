import gql from 'graphql-tag';

export const EDIT_FEED_MUTATION = gql`
  mutation EditFeed($id: Float!, $title: String!, $description: String!, $author: String!,
      $imageUrl: String!, $link: String!, $date: String) {
    editFeed(id: $id, title: $title, description: $description, author: $author,
        imageUrl: $imageUrl, link: $link, date: $date) 
  }
`;
