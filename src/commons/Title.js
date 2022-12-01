import styled from "styled-components";

export const Titlecommons = () => {
  return (
    <DivHeader>
      <Title>WELCOME TO MY WORLD!</Title>
    </DivHeader>
  );
};

const DivHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #00000017;
  backdrop-filter: blur(10px);
  border-bottom: 0.1rem solid #63cb70;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #63cb77;
  position: absolute;
  background: #24213217;
  text-shadow: 0.1rem 0.1rem #63cb;
  z-index: 2;
  &:hover {
    transform: rotate3d(1, 2, 1, 360deg);
    transition: 0.8s;
  }
`;
