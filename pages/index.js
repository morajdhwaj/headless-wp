import { client } from "../utils/client";
import { GET_POSTS } from "../utils/query";

export default function Home({ posts,pageInfo }) {
  return (
    <div>
      <h1>Hello from the home page age</h1>
      {posts.map((post) => {
        return (
          <>
            <ul key={post.slug}>
              <li>{post.title}</li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export async function getServerSideProps({query}) {
const {next} = query
  const data = await client.query({
    query: GET_POSTS,
    variables: { first: 1, after:next || null },
  });

  const posts = data?.data?.posts?.nodes || [];
  const pageInfo = data?.data?.posts?.pageInfo || {};
  return {
    props: {
      posts,
      pageInfo,
    },
  };
}
