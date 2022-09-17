import { client } from "../utils/client";
import { GET_POSTS } from "../utils/query";

export default function Home({ posts,pageInfo }) {
  console.log(posts)

  return (
    <div>
      <h1 className="text-center text-2xl font-bold py-5">Latest Blogs</h1>
      {posts.map((post) => {
        return (
          <>
            <ul key={post.slug} className="px-10 py-1 font-semibold">
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
    variables: { first: 10, after:next || null },
  });

  const posts = data?.data?.posts?.nodes || [];
  const pageInfo = data?.data?.posts?.pageInfo || [];
  return {
    props: {
      posts,
      pageInfo,
    },
  };
}
