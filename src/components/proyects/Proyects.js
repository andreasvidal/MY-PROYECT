import {Titlecommons} from "../../commons/Title";
import { FooterCommons } from "../../commons/Footer";
import { AiOutlineRollback } from "react-icons/ai";
//import Monster from "../../assets/monster.png"
import {Skills} from "../Skills/Skills"
import { Link } from "react-router-dom";
import {ShowProyects} from "../ShowProyects/ShowProyects"
import styled from 'styled-components';

export const Proyects = () => {
    return (
    <Main>
        <Titlecommons/>
        <Link to="/" ><PTitle>PROYECTS<IconsBack><AiOutlineRollback></AiOutlineRollback></IconsBack></PTitle></Link>
        <H2>Estos fueron mis desafíos realizados en mi paso por un hermoso proyecto llamado Laboratoria, luego de 6 meses de trabajo simulando un ambiente de trabajo real. Estos son mis 1eras experiencias desallorando aplicaciones que debian cumplir con ciertos estandares para realizar la entrega y revisión, en cada uno aprendi y aplique diferentes objetivos de aprendizaje.</H2>
        <DivSkill>
            <Skills/>
        </DivSkill>
        <DivImg>
        <ShowProyects/>
        </DivImg>
        <FooterCommons/>
    </Main>
    )
}

const Main = styled.main`
padding: 0;
margin: 0;
outline: none;
box-sizing: border-box;
background: linear-gradient(168.55deg, #0D1C29 8.85%, #B469EB 42.19%, #8046A5 67.19%, #0D1C29 93.75%);
`;

const H2 = styled.h2`
font-family: 'Anonymous Pro';
font-style: bold;
font-weight: 700;
font-size: 2.5vh;
line-height: 1.2rem;
margin: 1rem 15%;
padding: 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
background: rgba(180, 105, 235, 0.03);
box-shadow: 0px 3px 10px #B469EB;
backdrop-filter: blur(90px);
color: #B469EB;
`

const PTitle = styled.p`
color: #B469EB;
text-decoration: none;
font-family: 'Anonymous Pro';
font-weight: 700;
background: #0D1C29;
box-shadow: 0px 30px 12px rgba(0, 0, 0, 0.01), 0px 28px 11px rgba(0, 0, 0, 0.07), 0px 16px 9px rgba(0, 0, 0, 0.25), 0px 7px 7px rgba(0, 0, 0, 0.43), 0px 2px 4px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(0, 0, 0, 0.5);
backdrop-filter: blur(11px);
margin: 2rem 25%;
display: flex;
justify-content: space-between;
align-items: center;
height: 5rem;
padding: 0 1.5rem;

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
width: fit-content;
flex-wrap: wrap;
justify-content: space-between;
border-top: 0.3rem outset #0d1c2930;
`


const IconsBack = styled.i`
background: rgba(180, 105, 235, 0.5);
color: #0D1C29;
height: 1em;
width: 1em;
padding: 1.5rem;
`
const DivSkill = styled.div`
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 1rem;
    margin: 0rem auto;

  img {
    width: 40vh;
  }
`