import Link from "next/link";
import Head from "next/head";
import { container } from "./Post.module.scss";

export const Post = ({ title, body }) => (
  <main className={container}>
    <Head>
      <title>{title} - Post</title>
    </Head>
    <h1>{title}</h1>
    <p>{body}</p>
    <Link href="/">
      <a>Go back to home</a>
    </Link>
  </main>
);

export default Post;
