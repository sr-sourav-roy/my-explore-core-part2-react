import { use } from "react";
import Post from "./Post";

export default function Posts({ postsPromise }) {
  const posts = use(postsPromise);
  return (
    <div className="userCard">
      <h1>All post user....{posts.length} </h1>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
}
