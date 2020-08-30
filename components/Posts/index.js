import Link from "next/link";
import { article, container } from "./Posts.module.scss";

const Post = ({ posts }) => (
  <section className={container}>
    {posts.map(({ id, title, body }) => (
      <article key={id} className={article}>
        <h2>{title}</h2>
        <p>{body}</p>
        <Link href="/post/[id]" as={`/post/${id}`}>
          <a>Read more...</a>
        </Link>
      </article>
    ))}
  </section>
);

export default Post;
