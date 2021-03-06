//import { Link } from "react-router-dom";
import styled from 'styled-components'
import {FooterCommons} from "../commons/Footer"
import {Titlecommons} from "../commons/Title"
import {AboutMe} from "../components/AbouteMe/AbouteMe"
import {ShowProyects} from "../components/ShowProyects/ShowProyects"
import {Hobbies} from "../components/hobbie/Hobbie"


export const Home = () => {
    return (
    <Main>
        <Titlecommons/>
        <div>
            {/*<Link to="/AbouteMe" ><P>ABOUTE ME</P></Link>
            <Link to="/proyects" ><P>PROYECTS</P></Link>
            <Link to="/hobbies" ><P>HOBBIES</P></Link>
            <Robot src={robot} alt="robot" />*/}
            <AboutMe/>
            <ShowProyects/>
            <Hobbies/>
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
`

/*const P = styled.p`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
left: 20px;
color: #B469EB;
text-decoration: none;
font-style: bold;
margin: 2.5rem 25%;
padding: 1.5rem;
background: #0D1C29;
box-shadow: 0px 30px 12px rgba(0, 0, 0, 0.01), 0px 28px 11px rgba(0, 0, 0, 0.07), 0px 16px 9px rgba(0, 0, 0, 0.25), 0px 7px 7px rgba(0, 0, 0, 0.43), 0px 2px 4px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(0, 0, 0, 0.5);
backdrop-filter: blur(11px);

&:hover {
    transition: 1s;
    cursor: pointer;
    transform: scale(1.15);
}
 `*/

/*const Robot = styled.img`
display: flex;
flex-direction: column;
align-items: center;
padding:1.5rem;
 width: 7rem;
 margin: auto;
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
 `*/