import {Titlecommons} from "../../commons/Title";
import { FooterCommons } from "../../commons/Footer";
import MyCv from "../../assets/cv.png"
import { Link } from "react-router-dom";
import styled from 'styled-components';

export const AboutMe = () => {
    return (
    <Main>
        <Titlecommons/>
        <Link to="/Home" ><PTitle>ABOUTE ME</PTitle></Link>
        <H2>Hola mi nombre es Andrea! Estoy comenzando es este mundo espacial del desalloro, para mi al comienzo era un lenguaje llegado desde otro planeta, pero con la constancia y ganas de aprender he podido ir traduciendo a mi propio lenguaje. Comenzando este viaje sin fin por el universo de la programación!</H2>
        <ImgCv src={MyCv} alt="foto mi cv"/>
        <FooterCommons/>
    </Main>
    )
}

const Main = styled.main`
padding: 0;
margin: 0;
outline: none;
box-sizing: border-box;
background: linear-gradient(168.55deg, #0D1C29 8.85%, #B469EB 42.19%, #8046A5 67.19%, #6E0F3C 93.75%);
`;

const H2 = styled.h2`
font-family: 'Anonymous Pro';
font-style: normal;
font-size: 2.5vh;
line-height: 1.063rem;
margin: 1rem;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
height: 5rem;
`

const PTitle = styled.p`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
left: 20px;
color: #B469EB;
text-decoration: none;
font-family: 'Anonymous Pro';
margin: 2rem 25%;
padding: 1.5rem;
background: #0D1C29;
box-shadow: 0px 30px 12px rgba(0, 0, 0, 0.01), 0px 28px 11px rgba(0, 0, 0, 0.07), 0px 16px 9px rgba(0, 0, 0, 0.25), 0px 7px 7px rgba(0, 0, 0, 0.43), 0px 2px 4px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(0, 0, 0, 0.5);
backdrop-filter: blur(11px);

&:hover {
   transition: 1s;
   cursor: pointer;
   transform: scale(1.15);
}
`
/*const ContH2 = styled.div`
background: rgba(180, 105, 235, 0.03);
box-shadow: 0px 4px 40.57px rgba(0, 0, 0, 0.19);
backdrop-filter: blur(90px);
display: flex;
align-items: center;
text-align: center;
width: 20rem;
height: 17.5rem;
margin: 2rem;
`*/

const ImgCv = styled.img`
height: 30rem;
width: 30rem;
`