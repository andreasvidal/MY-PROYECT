import { Link } from "react-router-dom";
import {Skills} from "../Skills/Skills"
import Rymt1 from "../../assets/rym/rymt1.jpg";
import styled from "styled-components";
import CardValidation from "../../assets/cardv/refuge.jpg";
import SocialNet from "../../assets/rs/social-net.png"
import BurgerQ from "../../assets/bq/burger-queen.png"

export const ShowProyects = () => {
  return (
      <main>
      <Link to="/"><PTitle>PROYECTS</PTitle></Link>
      <Skills/>
          <H2Proyects> Mis proyectos</H2Proyects>
          <P2>Estos fueron algunos de los desafíos realizados en mi paso por un hermoso oportunidad llamada Laboratoria, luego de 6 meses de aprendizaje simulando un ambiente de trabajo real. Estos fuerno mis primeras experiencias desallorando aplicaciones que debian cumplir con ciertos estandares para realizar la entrega y revisión, en cada uno aprendi y aplique diferentes objetivos de aprendizaje. Sigo por el camino del conocimiento para mejorar día a día!</P2>
            <ContainerProyect>
                <Proyect>
                    <AncProyect 
                    href="https://andreasvidal.github.io/SCL019-card-validation/src/index.html"
                    target="_blank">
                    <ImgProyect src={CardValidation} alt="img proyecto rym" />
                    <H3Proyects>Card Validation 
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
        </H3Proyects>
        </AncProyect>
          </Proyect>
          <Proyect>
                    <AncProyect 
                    href="https://andreasvidal.github.io/SCL019-data-lovers/"
                    target="_blank">
                    <ImgProyect src={Rymt1} alt="img proyecto rym" />
                    <H3Proyects>Card Validation 
                    <Description>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi voluptate incidunt impedit velit suscipit est totam accusantium aut consequuntur provident laboriosam ut at delectus consequatur a quo, nesciunt expedita molestiae.
            </Description>
        </H3Proyects>
        </AncProyect>
          </Proyect>
          <Proyect>
                    <AncProyect 
                    href="https://andreasvidal.github.io/SCL019-social-network/src/#/home"
                    target="_blank">
                    <ImgProyect src={SocialNet} alt="img proyecto rym" />
                    <H3Proyects>Card Validation 
                    <Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis temporibus eius dolore placeat reprehenderit voluptatum quo, aut debitis cum dolor velit rem, minima, eveniet eum. Similique nemo perferendis sequi.
            </Description>
        </H3Proyects>
        </AncProyect>
          </Proyect>
          <Proyect>
                    <AncProyect 
                    href="https://polite-pixie-5eb7e7.netlify.app"
                    target="_blank">
                    <ImgProyect src={BurgerQ} alt="img proyecto rym" />
                    <H3Proyects>Card Validation 
                    <Description>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ducimus alias! Libero impedit earum debitis sint, omnis minima saepe animi suscipit illo at porro, quas doloremque nulla architecto totam. Doloribus.
            </Description>
        </H3Proyects>
        </AncProyect>
          </Proyect>
          </ContainerProyect>
      </main>
  );
};

const H2Proyects = styled.h2`
color: #0D1C29;
jutify-contect: center;
text-decoration: none;
margin-top: 1rem;
text-align: center;
font-weight: 700;
font-size: 3vw;
padding: 1rem;
`;

const ContainerProyect = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3vh;
    padding: 2rem;
    margin: 0.5rem;
`;

const Proyect = styled.div`
position: relative;
transition: ease-in-out 0.3s;

&:hover {
    transform: scale(1.1);
}
`;

const H3Proyects = styled.h3`
width: 100%;
bottom: 0;
top: 0;
position: absolute;
padding: 3rem 0rem;
transition: ease-in-out 0.3s;
opacity: 0;
font-size: 30px;
`;

const Description = styled.p`
font-weight: 600;
color: white;
font-size: 0.9rem;
margin: 0.3rem;

&:hover {
text-align: center;
font-weight: 700;
opacity: 1;
color: white;
background-color: rgba(126, 90, 255, 0.8);
        }
`
const ImgProyect = styled.img`
object-fit: cover;
width: 250px;
height: 250px;
border: solid 0.3rem #0d1c2966;
`;

const AncProyect = styled.a`
text-decoration: none;
color: white;

a:visited {
color: white;
}
`

const PTitle = styled.p`
color: #B469EB;
text-decoration: none;
background: #0D1C29;
box-shadow: 0px 30px 12px rgba(0, 0, 0, 0.01), 0px 28px 11px rgba(0, 0, 0, 0.07), 0px 16px 9px rgba(0, 0, 0, 0.25), 0px 7px 7px rgba(0, 0, 0, 0.43), 0px 2px 4px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(0, 0, 0, 0.5);
backdrop-filter: blur(11px);
margin: 2rem 25%;
display: flex;
justify-content: center;
align-items: center;
height: 5rem;
padding: 0 1.5rem;
font-weight: 700;
font-size: 3vw;

&:hover {
   transition: 1s;
   cursor: pointer;
   transform: scale(1.15);
}
`
const P2 = styled.p`
font-weight: 400;
font-size: 3.5vh;
line-height: 2rem;
margin: 1rem 15%;
padding: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
text-align: justify;
text-justify: inter-word;
background: rgba(180, 105, 235, 0.03);
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
backdrop-filter: blur(90px);
color: #0D1C29;
`