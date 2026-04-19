import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Count";
import Bolar from "./Bolar";

function App() {
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

        <Bolar></Bolar>

        <Batsman></Batsman>

        <Counter></Counter>

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
