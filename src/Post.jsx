export default function Post({ post }) {
  console.log(post);
  const { title, body } = post;
  return (
    <div className="userCard">
      <h4>Title: {title}</h4>
      <h4>Body: {body}</h4>
    </div>
  );
}
