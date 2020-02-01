import * as React from "react";
import FallDown from "./FallDown";

const emojis = ["🤑", "💸", "💵", "💲"];

const getOneOfEmojis = () => {
  const index = Math.floor(Math.random() * emojis.length) + 0;
  return emojis[index];
};

export default function() {
  const position = {
    x: Math.floor(Math.random() * window.innerWidth) + 0,
    y: Math.floor((Math.random() * window.innerHeight) / 2) + 0
  };
  return (
    <FallDown style={{ top: position.y, left: position.x }}>
      {getOneOfEmojis()}
    </FallDown>
  );
}
