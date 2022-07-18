
import {Skills} from "../Skills/Skills"
import Rymt1 from "../../assets/rym/rymt1.jpg";
import styled from "styled-components";
import CardValidation from "../../assets/cardv/refuge.jpg";
import SocialNet from "../../assets/rs/social-net.png"
import BurgerQ from "../../assets/bq/burger-queen.png"

export const ShowProyects = () => {
  return (
      <main>
      <Skills/>
          <H2Proyects> Mis proyectos</H2Proyects>
            <ContainerProyect>
                <Proyect>
                    <AncProyect 
                    href="https://andreasvidal.github.io/SCL019-card-validation/src/index.html"
                    target="_blank">
                    <ImgProyect src={CardValidation} alt="img proyecto rym" />
                    <H3Proyects>Card Validation 
                    <Description>
                    En este proyectose trata de construir una aplicación web que permita a
                    un usuario validar el número de una tarjeta de crédito. Tecnologías utilizadas HTML, CSS y
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
                    href="https://spacegrill.netlify.app/"
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
color: #ae8cfa;
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
opacity: 1;
transform: translateY(0px);
&:hover{
    transform: translateY(20px);
  }
    &:before{
      opacity: 1;
    }
  &:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
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
border: solid 0.3rem #ae8cfa;
`;

const AncProyect = styled.a`
text-decoration: none;
color: white;
a:visited {
color: white;
}
`
