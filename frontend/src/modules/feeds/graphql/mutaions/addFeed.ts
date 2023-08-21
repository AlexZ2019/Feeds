import gql from 'graphql-tag';

export const ADD_FEED_MUTATION = gql`
  mutation AddFeed($title: String!, $description: String, $author: String,
      $imageUrl: String!, $link: String!, $date: String) {
    addFeed(title: $title, description: $description, author: $author,
        imageUrl: $imageUrl, link: $link, date: $date) 
  }
`;
