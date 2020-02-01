import styled, { keyframes, css } from "styled-components";

const windowHeight = window.innerHeight;

const falldown = keyframes`
  0%{
    opacity: 0;
    transform: translateY(0) rotate(0);
  }
  5%{
    transform: translateY(5px) rotate(0);
    opacity: 1;
  }
  95%{
    transform: translateY(${windowHeight - 5}px) rotate(360deg);
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform : translateY(${windowHeight}px) rotate(360deg);
  }
`;


type FallDownProps = {
  speed: number;
}
const animation = (speed: FallDownProps['speed']) => css`
  animation: ${falldown};
  animation-duration: ${`${speed}s`};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export default styled.div<FallDownProps>`
  ${props => animation(props.speed)};
  position: absolute;
  user-select: none;
  z-index: 10;
`;
