import { use } from "react";
import DataInput from "./DataInput";

export default function DataApi({ dataPromise }) {
  const data = use(dataPromise);
  // const { company, email } = dada;
  return (
    <div className="card">
      <h1>hello : {data.length}</h1>
      {data.map((inputData) => (
        <DataInput inputData={inputData}></DataInput>
      ))}
    </div>
  );
}
