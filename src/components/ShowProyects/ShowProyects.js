import styled from "styled-components";
//import Rymt1 from "../../assets/rym/rymt1.jpg";
import CardValidation from "../../assets/cardv/refuge.jpg";
//import SocialNet from "../../assets/rs/social-net.png";
//import BurgerQ from "../../assets/bq/burger-queen.png";

export const ShowProyects = () => {
  return (
    <>
      <H2Proyects> Mis proyectos</H2Proyects>
      <Main>
        <Container>
          <div className="face front ">
            <a
              href="https://andreasvidal.github.io/SCL019-card-validation/src/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <img src={CardValidation} alt="img proyecto Card Validation" />
            </a>
            <TitleCard>Card Validation</TitleCard>
          </div>
          <div className="face back">
            <h2>Card Validation - Refuge Pet</h2>
            <p>
              En este proyectose trata de construir una aplicación web que
              permita a un usuario validar el número de una tarjeta de crédito.
              Tecnologías utilizadas HTML, CSS y JavaScript como tecnologías.
            </p>
          </div>
        </Container>
      </Main>
    </>
  );
};

const Main = styled.body`
  display: flex;
  align-items: center;
  justify-constent: center;
  margin: 1rem;
  flex-wrap: wrap;
`;

const H2Proyects = styled.h2`
  color: #63cb70;
  jutify-contect: center;
  text-decoration: none;
  margin-top: 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 3vw;
  padding: 1rem;
`;
const Container = styled.div`
  position: relative;
`;
const TitleCard = styled.h2`
  color: #ae8cfa;
`;

/*const Description = styled.p`
color: #ae8cfa;
background: #000000;
`*/
