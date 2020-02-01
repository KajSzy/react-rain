import styled, { keyframes } from "styled-components";

const falldown = keyframes`
  from {
    transform: translateY(0) rotate(0deg);
  }

  to {
    transform : translateY(400px) rotate(360deg);
  }
`;

export default styled.div`
  animation: ${falldown} 2s linear infinite;
  position: absolute;
`;
