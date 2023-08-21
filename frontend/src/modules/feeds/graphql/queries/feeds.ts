import gql from 'graphql-tag';

export const FEEDS_QUERY = gql`
    query GetFeeds($page: Float, $pageSize: Float, $search: String) {
        getFeeds(page: $page, pageSize: $pageSize, search: $search) {
            total
            pages
            feeds {
                id
                title
                description
                author
                imageUrl
                link
                date
            }
        }
    }
`;
