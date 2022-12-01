import styled from "styled-components";

export const AboutMe = () => {
  return (
    <Main>
      <PTitle>¡SOBRE MI!</PTitle>
      <H2>
        Mi nombre es Andrea Salas, reconvirtiendo mi camino desde la
        construcción al desarrollo web, estoy muy motivada por aprender, aportar
        y afrontar nuevos desafíos. Quiero tener la oportunidad de que nos
        conozcamos en una entrevista para personalmente exponerles mis aptitudes
        y mis deseos de formar parte de su equipo. Cualquier consulta o
        información adicional, no duden en escribirme.
      </H2>
      <DivImg>
        <ImgCv
          href="https://drive.google.com/file/d/1GYfnq6cxPSHZ7Jwro26ddqBJ4eqPKP5t/view?usp=sharing"
          target="_blank"
        >
          Descargar CV
        </ImgCv>
      </DivImg>
    </Main>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  background: #202c33;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 300;
  line-height: 2rem;
  margin: 1rem 10%;
  padding: 0.5rem;
  align-items: center;
  text-align: justify;
  text-justify: inter-word;
  color: #fefcff;
  border-radius: 0.6rem;
`;

const PTitle = styled.p`
  color: #63cb70;
  text-decoration: none;
  margin: 1.5rem 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  padding: 0 1.5rem;
  font-weight: 700;
  font-size: 3vw;
  text-shadow: 0.1rem 0.1rem #63cb;
`;

const DivImg = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 0.1rem solid #63cb70;
`;

const ImgCv = styled.a`
  background-color: #63cb70;
  padding: 1rem 2rem;
  margin: 2.5rem;
  border: solid 0.3rem #0d1c29;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #0d1c29;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2vw;
  &:hover {
    transition: 0.5s;
    cursor: pointer;
    transform: scale(1.5);
  }
`;
