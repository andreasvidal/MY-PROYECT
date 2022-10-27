import { Skills } from "../Skills/Skills";
import styled from "styled-components";
//import Rymt1 from "../../assets/rym/rymt1.jpg";
import CardValidation from "../../assets/cardv/refuge.jpg";
//import SocialNet from "../../assets/rs/social-net.png";
//import BurgerQ from "../../assets/bq/burger-queen.png";

export const ShowProyects = () => {
  return (
    <>
      <Skills />
      <H2Proyects> Mis proyectos</H2Proyects>
      <Main>
        <Container>
          <div className="face front ">
            <a
              href="https://andreasvidal.github.io/SCL019-card-validation/src/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={CardValidation}
                alt="img proyecto Card Validation"
              />
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
`

const H2Proyects = styled.h2`
color: #ae8cfa;
jutify-contect: center;
text-decoration: none;
margin-top: 1rem;
text-align: center;
font-weight: 700;
font-size: 3vw;
padding: 1rem;
`
const Container = styled.div`
position: relative;
width: 250px;
height: 250px;
cursor: pointer;
&:hover{
  transform: scale(1.1);
  transition: .3s;
}

.face{
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  transition: .5s;
}
.back{
    transform:  rotatey(180deg);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-aling: center;
    background: #00000052;
    color: #ae8cfa;
  }
  .front{
    transform: rotatey(0deg); 
    box-shadow: 0 5px 10px #00000;
    img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    }
    h2{
    position: absolute;
    width: 100%;
    height: 1rem;
    text-align: center;
    color: #ae8cfa;
    line-height: 45px;
    }
  }
`
const TitleCard = styled.h2`
color: #ae8cfa;
`

const Description = styled.p`
color: #ae8cfa;
background: #000000;
`