import * as React from "react";
import "./styles.css";
import Rain from "./Rain";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ height: '100vh', width: '100vw', position: "fixed", overflow: 'hidden', top: 0, left: 0, }}>
        {new Array(300).fill("").map((a, index) => (
          <Rain key={index} />
        ))}
      </div>
    </div>
  );
}
