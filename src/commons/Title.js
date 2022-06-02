import styled from 'styled-components'
import { BiWorld } from "react-icons/bi";

export const Titlecommons = () => {
    return(
        <Title>WELCOME TO MY (HELLO) WORLD <BiWorld/> !</Title>
    )
}

const Title = styled.h1`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
font-family: 'Anonymous Pro';
font-size: 1.5rem;
font-weight: 700;
color: #B469EB;
margin: auto 25%;
padding: 2rem;
background: rgba(180, 105, 235, 0.03);
box-shadow: 0px 3px 10px #B469EB;
backdrop-filter: blur(90px);
 `;