import { useState } from "react";

export default function Batsman() {
  //This Hook items:
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handelSingles = () => {
    const updateSingles = runs + 1;
    setRuns(updateSingles);
  };
  const handelFour = () => {
    const updateFour = runs + 4;
    setRuns(updateFour);
  };

  const handelSix = () => {
    const updateSix = runs + 6;
    const updateSixes = sixes + 1;
    setSixes(updateSixes);
    setRuns(updateSix);
  };
  const styleBatsman = {
    border: " 2px solid blue",
  };
  return (
    <div style={styleBatsman}>
      <h2>Batsman: MS Doni 🔥 </h2>
      <p>
        <small>Six: {sixes}</small>
      </p>
      {runs > 50 && <p>score: {runs}</p>}
      <h1>Score: {runs}</h1>
      <button onClick={handelSingles}>singles</button>
      <button onClick={handelFour}>Four</button>
      <button onClick={handelSix}>six</button>
    </div>
  );
}
