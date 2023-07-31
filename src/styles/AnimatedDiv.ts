import styled, { keyframes } from 'styled-components';

const animateShadow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const AnimatedDiv = styled.div`
  border-radius: 10px;
  padding-top: 1em;
  &:hover {
    animation: ${animateShadow} 1s ease-in-out infinite;
  }
`;

export default AnimatedDiv;
