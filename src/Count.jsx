import { useState } from "react";

export default function Counter() {
  //jsx use to useSate:
  const [count, setCount] = useState(0);

  // event handler:
  const handler = () => {
    const newAAA = count + 1;
    setCount(newAAA);
  };

  //css style:
  const counterStyle = {
    border: "2px solid green",
    marginBottom: "20px",
    padding: "20px",
  };
  return (
    <div style={counterStyle}>
      <p>Count: {count} </p>
      <button onClick={handler}>add me</button>
    </div>
  );
}
