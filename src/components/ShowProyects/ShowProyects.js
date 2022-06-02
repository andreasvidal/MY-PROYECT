import Rymt1 from "../../assets/rym/rymt2.jpg";
import styled from "styled-components";

export const ShowProyects = () => {
  return (
      <main>
      <H2Proyects>!PROYECTS!</H2Proyects>
    <ContainerProyect>
    <Proyect>
      <ContainerImg>
        <a
          href="https://scl-019-card-validation-tau.vercel.app/src/index.html"
          target="_blank"
        ></a>
        <img src={Rymt1} alt="img proyecto rym" />
        <H3Proyects>Card Validation </H3Proyects>
        <Description>
          En este proyectose trata de construir una aplicación web que permita a
          un usuario validar el número de una tarjeta de crédito. Además,
          tendrás implementar funcionalidad para ocultar todos los dígitos de
          una tarjeta menos los últimos cuatro. La temática es libre. Debes
          pensar en qué situaciones de la vida real se necesitaría validar una
          tarjeta de crédito y pensar en cómo debe ser esa experiencia de uso
          (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc.
          Aprender a construir una aplicación web que interactuará con l@s
          usuari@ final a través del navegador, utilizando HTML, CSS y
          JavaScript como tecnologías.
        </Description>
      </ContainerImg>
      <ContainerImg>
        <a
          href="https://scl-019-card-validation-tau.vercel.app/src/index.html"
          target="_blank"
        ></a>
        <img src={Rymt1} alt="img proyecto rym" />
        <H3Proyects>Data Lovers </H3Proyects>
        <Description>
          En este proyectose trata de construir una aplicación web que permita a
          un usuario validar el número de una tarjeta de crédito. Además,
          tendrás implementar funcionalidad para ocultar todos los dígitos de
          una tarjeta menos los últimos cuatro. La temática es libre. Debes
          pensar en qué situaciones de la vida real se necesitaría validar una
          tarjeta de crédito y pensar en cómo debe ser esa experiencia de uso
          (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc.
          Aprender a construir una aplicación web que interactuará con l@s
          usuari@ final a través del navegador, utilizando HTML, CSS y
          JavaScript como tecnologías.
        </Description>
      </ContainerImg>
      <ContainerImg>
        <a
          href="https://scl-019-card-validation-tau.vercel.app/src/index.html"
          target="_blank"
        ></a>
        <img src={Rymt1} alt="img proyecto rym" />
        <H3Proyects>Social Network </H3Proyects>
        <Description>
          En este proyectose trata de construir una aplicación web que permita a
          un usuario validar el número de una tarjeta de crédito. Además,
          tendrás implementar funcionalidad para ocultar todos los dígitos de
          una tarjeta menos los últimos cuatro. La temática es libre. Debes
          pensar en qué situaciones de la vida real se necesitaría validar una
          tarjeta de crédito y pensar en cómo debe ser esa experiencia de uso
          (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc.
          Aprender a construir una aplicación web que interactuará con l@s
          usuari@ final a través del navegador, utilizando HTML, CSS y
          JavaScript como tecnologías.
        </Description>
      </ContainerImg>
      <ContainerImg>
        <a
          href="https://scl-019-card-validation-tau.vercel.app/src/index.html"
          target="_blank"
        ></a>
        <img src={Rymt1} alt="img proyecto rym" />
        <H3Proyects>Buger Queen </H3Proyects>
        <Description>
          En este proyectose trata de construir una aplicación web que permita a
          un usuario validar el número de una tarjeta de crédito. Además,
          tendrás implementar funcionalidad para ocultar todos los dígitos de
          una tarjeta menos los últimos cuatro. La temática es libre. Debes
          pensar en qué situaciones de la vida real se necesitaría validar una
          tarjeta de crédito y pensar en cómo debe ser esa experiencia de uso
          (qué pantallas, explicaciones, mensajes, colores, ¿marca?) etc.
          Aprender a construir una aplicación web que interactuará con l@s
          usuari@ final a través del navegador, utilizando HTML, CSS y
          JavaScript como tecnologías.
        </Description>
      </ContainerImg>
      </Proyect>
    </ContainerProyect>
    </main>
  );
};

const ContainerProyect = styled.div`
   display: grid;
`;

const H2Proyects = styled.h2`
  width: 100%;
font-size: 5vh;
font-weight: 700;
text-align: center;
color: #0D1C29;
margin: 1rem;
`;

const ContainerImg = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 1.5rem;
width: min-content;

  img {
        object-fit: cover;
        width: 15.625rem;
        height: 15.625rem;
      }

background: rgba(180, 105, 235, 0.03);
box-shadow: 0px 3px 10px #B469EB;
backdrop-filter: blur(90px);

  &:hover {
    transform: scale(1.1);
  }
`;
const Proyect = styled.div`
background: #000000;
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
padding: 1rem;
margin: 0rem auto;
width: 90%;
`

const H3Proyects = styled.h3`
font-family: 'Anonymous Pro';
font-style: bold;
color: #0D1C29;
font-weight: 400;
`;

const Description = styled.p`
font-family: 'Anonymous Pro';
font-style: bold;
color: #0D1C29;
font-weight: 400;

`;
