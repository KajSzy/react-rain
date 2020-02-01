import * as React from "react";
import "./styles.css";
import Rain from "./Rain";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {new Array(150).fill("").map((a, index) => (
        <Rain key={index} />
      ))}
    </div>
  );
}
