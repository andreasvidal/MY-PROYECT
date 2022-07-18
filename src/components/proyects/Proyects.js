
//import Monster from "../../assets/monster.png"
import {ShowProyects} from "../ShowProyects/ShowProyects"
import styled from 'styled-components';

export const Proyects = () => {
    return (
    <main>
        <DivImg>
        <ShowProyects/>
        </DivImg>
    </main>
    )
}

const PTitle = styled.p`
color: #B469EB;
text-decoration: none;
font-family: 'Anonymous Pro';
font-weight: 700;
background: #ae8cfa;
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
`


const IconsBack = styled.i`
background: rgba(180, 105, 235, 0.5);
color: #ae8cfa;
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