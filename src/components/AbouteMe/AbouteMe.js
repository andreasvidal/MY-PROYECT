
import { AiOutlineRollback } from "react-icons/ai";
import { IoIosRocket, IoMdFingerPrint } from "react-icons/io";
//import Monster from "../../assets/monster.png"
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const AboutMe = () => {
    return (
    <Main>
        <Link to="/" ><PTitle>ABOUTE ME<IconsBack><AiOutlineRollback></AiOutlineRollback></IconsBack></PTitle></Link>
        <H2><IoIosRocket/>Hola mi nombre es <NameTitle>Andrea!</NameTitle><br/>Front-end comenzando en el mundo del desarrollo, hice posible mis estudios de ingeniería en Construcción y esto ha aportado en mi vida la responsabilidad y el compromiso de afrontar nuevos desafíos.<br />

Esta etapa, me ayudó no solo a mejorar mi capacidad descubrir, sino que también contribuyó a desarrollar la adaptación al entorno, mi grado de responsabilidad, de comunicación y de gestionar situaciones difíciles. <br />

Mi meta es convertirme en un futuro profesional lo más completo posible, con habilidades más allá de la aplicación práctica de los conocimientos que se adquieren. Por eso estoy en la búsqueda de cursos relacionados con el desarrollo que me ayuden a crecer profesionalmente y mejorar mis habilidades, en lógica, gestión. trabajo colaborativo, liderazgo, buenas prácticas etc.

Si quieres conocer más de mí o necesitas más información, no dudes en preguntarme. 
Abierto a afrontar nuevos desafíos laborales.</H2>
        <DivImg>
        <ImgCv href="https://drive.google.com/file/d/1CLqLdjQVtuCPdz81Z1PcR_iiEAHKsOsV/view?usp=sharing" target="_blank">Descargar CV</ImgCv>
        </DivImg>
    </Main>
    )
}

const Main = styled.main`
padding: 0;
margin: 0;
outline: none;
`;

const H2 = styled.h2`
font-style: bold;
font-size: 3.5vh;
line-height: 1.5rem;
margin: 1rem 15%;
padding: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
color: #0D1C29;
font-weight: 400;
font-style: bold;
svg {
    width: 4vh;
    height: 4vh;
    align-items: center;
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
justify-content: space-between;
align-items: center;
height: 5rem;
padding: 0 1.5rem;
svg {
    width: 4vh;
    height: 4vh;
    align-items: center;
    text-aling: center;
}

&:hover {
   transition: 1s;
   cursor: pointer;
   transform: scale(1.15);
}

`

const DivImg = styled.div`
display: flex;
align-items: center;
text-align: center;
width: 100%;
flex-wrap: wrap;
justify-content: center;
`

const ImgCv = styled.a`
background-color: transparent;
padding: 0.5rem 1rem;
margin: 2rem;
border: solid 0.3rem #0D1C29;
text-decoration: none;
color: #0D1C29;
text-transform: uppercase;
&:hover {
   transition: 1s;
   cursor: pointer;
   transform: scale(2.5);
}
`

const IconsBack = styled.i`
background: rgba(180, 105, 235, 0.5);
color: #0D1C29;
height: 1em;
width: 1em;
padding: 1.5rem;
`
const ImgAboutMe = styled.i`
font-size: 5rem;
margin: 2rem 10rem;
padding: 0.5rem;
border-radius: 50%;
background: linear-gradient(180deg, rgba(180, 105, 235, 0.9) 0%, rgba(110, 72, 153, 0.9) 52.08%, rgba(13, 28, 41, 0.468) 100%);
animation-name:rotate;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
&:after transform:rotate(-57deg);
&:before transform:rotate(57deg);
 @keyframes rotate{
    100%{
    transform:rotate(360deg);
    }
}
`

const NameTitle = styled.p`
font-size: 10vh;
margin: 1rem;
`