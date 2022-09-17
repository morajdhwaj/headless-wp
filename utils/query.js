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
  query MyQuery {
  posts(first: 10) {
    nodes {
      content
      authorId
      date
      featuredImageDatabaseId
      id
      isPreview
      slug
      title
      link
      excerpt
    }
    pageInfo {
      endCursor
    }
  }
}`;
