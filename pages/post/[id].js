import axios from "axios";
export { Post as default } from "../../components/Post";

export const getStaticPaths = async () => {
  let posts = [];
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_page=1"
    );
    posts = response.data;
  } catch (e) {}

  return {
    paths: posts.map((post) => ({
      params: {
        id: `${post.id}`,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  let post = {};
  let error = "";
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    post = response.data;
  } catch (err) {
    error = err.toString();
  }

  return {
    props: {
      ...post,
      error,
    },
  };
};
