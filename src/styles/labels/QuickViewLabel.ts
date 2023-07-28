import styled from 'styled-components';

const QuickViewLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  background-color: #54b4d3;
  font-weight: 700;
  color: white;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default QuickViewLabel;
