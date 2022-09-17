import { client } from "../utils/client";
import { GET_POSTS } from "../utils/query";

export default function post(data) 
{}

export async function getStaticProps(context) {
  const data = await client.query({
    query: GET_POSTS,
    variables: { rizwan: 10 },
  });
  return {
    props: {
      post: json.data.post,
    },
  };
}
