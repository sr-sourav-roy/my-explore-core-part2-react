import { useState } from "react";

export default function Bolar() {
  const [Bol, setBol] = useState(0);

  const jadejaBolar = () => {
    const updateBolar = Bol + 1;
    setBol(updateBolar);
  };

  const bolStyle = {
    border: "2px solid red",
  };
  return (
    <div style={bolStyle}>
      <h3>Bolar: Indian Team</h3>
      {Bol >= 4 && (
        <p>
          <small>jadeja Over Four over: {Bol}</small>
        </p>
      )}
      <h1>Over: {Bol}</h1>
      <button onClick={jadejaBolar}>jadeja</button>
      <button>Sakib</button>
    </div>
  );
}
