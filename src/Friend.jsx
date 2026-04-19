export default function Friend({ friend }) {
  console.log(friend);
  const { name, email, phone } = friend;
  return (
    <div className="userCard">
      <h4>name: {name}</h4>
      <h4>email: {email}</h4>
      <h4>phone: {phone}</h4>
    </div>
  );
}
