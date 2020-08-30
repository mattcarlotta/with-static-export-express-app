import Head from "next/head";
import axios from "axios";
import Posts from "../components/Posts";
import Error from "../components/Error";

export async function getStaticProps() {
  let posts = [];
  let error = "";
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_page=1"
    );
    posts = response.data;
  } catch (err) {
    error = err.toString();
  }

  return {
    props: {
      posts,
      error,
    },
  };
}

const IndexPage = ({ error, posts }) => (
  <main>
    <Head>
      <title>Posts - Home</title>
    </Head>
    {!error ? <Posts posts={posts} /> : <Error error={error} />}
  </main>
);

export default IndexPage;
