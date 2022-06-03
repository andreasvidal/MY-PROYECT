import {Titlecommons} from "../../commons/Title"
import {FooterCommons} from "../../commons/Footer"
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import CheeseCake from "../../assets/hobbies/cheesseC.jpg"
import Pictur1 from "../../assets/hobbies/picture7.JPG"
import Pictur2 from "../../assets/hobbies/picture2.jpg"
import Pictur3 from "../../assets/hobbies/picture3.jpg"
import Pictur4 from "../../assets/hobbies/picture4.jpg"
import Cocina1 from "../../assets/hobbies/cocina1.jpg"
import Cocina from "../../assets/hobbies/cocina.jpg"
import BurgerQ from "../../assets/bq/burger-queen.png"
import Cupcake from "../../assets/hobbies/cupcake.jpg"
import Tejido from "../../assets/hobbies/tejido.jpg"
import styled from "styled-components"


export const Hobbies = () => {
    return (
        <Main>
            <Titlecommons/>
            <Link to="/" ><PTitle>HOBBIES<IconsBack><AiOutlineRollback></AiOutlineRollback></IconsBack></PTitle></Link>
            <DivH2><H2>FOTOGRAFÍA</H2></DivH2>
            <Container>
                <Pic src={Pictur1} alt="img proyecto rym"/>
                <Pic src={Pictur2} alt="img proyecto rym"/>
                <Pic src={Pictur3} alt="img proyecto rym"/>
                <Pic src={Pictur4} alt="img proyecto rym"/>
            </Container>
            <DivH2><H2>PLANTAS</H2></DivH2>
            <Container>
                <Pic src={BurgerQ} alt="img proyecto rym"/>
                <Pic src={BurgerQ} alt="img proyecto rym"/>
                <Pic src={BurgerQ} alt="img proyecto rym"/>
                <Pic src={BurgerQ} alt="img proyecto rym"/>
            </Container>
            <DivH2><H2>COCINA</H2></DivH2>
            <Container>
                <Pic src={Cocina1} alt="img proyecto rym"/>
                <Pic src={Cocina} alt="img proyecto rym"/>
                <Pic src={Cupcake} alt="img proyecto rym"/>
                <Pic src={CheeseCake} alt="img proyecto rym"/>
            </Container>
            <DivH2><H2>TEJIDO</H2></DivH2>
            <Container>
                <Pic src={Tejido} alt="img proyecto rym"/>
                <Pic src={BurgerQ} alt="img proyecto rym"/>
                <Pic src={BurgerQ} alt="img proyecto rym"/>
                <Pic src={BurgerQ} alt="img proyecto rym"/>
            </Container>
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

const PTitle = styled.p`
color: #B469EB;
text-decoration: none;
font-family: 'Anonymous Pro';
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

const IconsBack = styled.i`
background: rgba(180, 105, 235, 0.5);
color: #0D1C29;
height: 1em;
width: 1em;
padding: 1.5rem;
`
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-aling: center;
    gap: 3vh;
    padding: 2rem;
    margin: 0 2rem;
    background: #0d1c2969;
`
const DivH2 = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
text-aling: center;
margin-top: 3rem;
background: #0d1c2969;
box-shadow: 3px 0px 0px #B469EB;
backdrop-filter: blur(90px);
padding: 1rem;
margin: 2rem 2rem 0;
`

const H2 = styled.h2`
font-family: 'Anonymous Pro';
font-style: bold;
color: #B469EB;
font-weight: 400;
`;

const Pic = styled.img`
object-fit: cover;
width: 250px;
height: 250px;
border: solid 0.3rem #0d1c2966;
`