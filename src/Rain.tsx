import * as React from "react";
import { FallDown } from "./FallDown";

interface RainParams {
  emojis?: string[];
}

const defaultEmojis = ["🤑", "💸", "💵", "💲"];

const getRandomInt = (min = 0, max: number): number => Math.floor(Math.random() * max) + min;

const Rain: React.FC<RainParams> = ({ emojis = defaultEmojis }) => {
  const [position, setPosition] = React.useState<[number, number]>(rerollPos());
  const fallingDownTime = React.useRef((Math.random() * 6) + 2);

  const getOneOfEmojis = () => {
    const index = getRandomInt(0, emojis.length);
    return emojis[index];
  };

  React.useEffect(() => {
    window.setInterval(() => {
      setPosition(rerollPos());
    }, fallingDownTime.current * 1000);
  }, []);

  function rerollPos(): [number, number] {
    const x = getRandomInt(15, document.body.getBoundingClientRect().width - 15);
    const y = getRandomInt(-10, -150);
    return [x, y];
  }
  return (
    <FallDown
      speed={fallingDownTime.current}
      style={{
        left: position[0],
        top: position[1],
      }}
    >
      {getOneOfEmojis()}
    </FallDown>
  );
}

export default Rain;
