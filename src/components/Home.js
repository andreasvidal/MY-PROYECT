import { Link } from "react-router-dom";
import robot from "../assets/logos/robot.png"
import styled from 'styled-components'
import {FooterCommons} from "../commons/Footer"
import {Titlecommons} from "../commons/Title"

export const Home = () => {
    return (
    <Main>
        <Titlecommons/>
        <div>
            <Link to="/AbouteMe" ><P>ABOUTE ME</P></Link>
            <Link to="/proyects" ><P>PROYECTS</P></Link>
            <Link to="/hobbies" ><P>HOBBIES</P></Link>
            <Robot src={robot} alt="robot" />
        </div>
        <FooterCommons/>
    </Main>
    )
};

const Main = styled.main`
padding: 0;
margin: 0;
outline: none;
box-sizing: border-box;
background: linear-gradient(168.55deg, #0D1C29 8.85%, #B469EB 42.19%, #8046A5 67.19%, #0D1C29 93.75%);
`

 const P = styled.p`
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

 const Robot = styled.img`
display: flex;
flex-direction: column;
align-items: center;
padding:1.5rem;
 width:4.375rem;
 margin: auto;
 `