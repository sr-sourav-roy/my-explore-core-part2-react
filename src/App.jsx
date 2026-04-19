import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Count";
import Bolar from "./Bolar";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import { Suspense } from "react";

// react api call functions sample:
// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );

//other api call functions:
// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

// again api call function:
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

function App() {
  // const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  // event handler
  function handleClick() {
    alert("click1 ");
  }
  const handlerClick2 = () => {
    alert("click 2");
  };

  const handlerClick4 = (num) => {
    const newNumber = num + 10;
    // note a return by alert
    alert(newNumber);
  };
  return (
    <>
      <div>
        <h1>Get started</h1>
        <Suspense fallback={<h5>With all posts coming...</h5>}>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense>

        {/* <Suspense fallback={<h4>With coming friends...</h4>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense> */}

        {/* <Suspense fallback={<p>loading user.... </p>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense> */}

        {/* <Bolar></Bolar> */}

        {/* <Batsman></Batsman> */}

        {/* <Counter></Counter> */}

        <button onClick={handleClick}>clik me</button>
        <br />
        <button onClick={handlerClick2}>clik me</button>
        <br />

        {/* optional randomly event handler */}
        <button onClick={() => alert("click random")}>clik me</button>

        <br />
        <button onClick={() => handlerClick4(45)}> click 4</button>
      </div>
    </>
  );
}

export default App;
