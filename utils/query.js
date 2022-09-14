import { gql } from "@apollo/client";

const GET_POST_BY_SLUG = gql`
  query HomePageQuery($slug: String) {
    postBy(slug: $slug) {
      author {
        node {
          name
        }
      }
      title
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          caption
          description
          link
        }
      }
      link
      slug
      status
    }
  }
`;

export const GET_POSTS = gql`
  query HomePageQuery($first: Int, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        author {
          node {
            name
          }
        }
        title
        content
        date
        excerpt
        featuredImage {
          node {
            altText
            caption
            description
            link
          }
        }
        link
        slug
        status
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;
