import styled from 'styled-components'
import logo from "../assets/logos/logo.png";
import { IoLogoLinkedin, IoLogoGithub, IoLogoWhatsapp } from "react-icons/io";

export const FooterCommons = () => {
    return(
        <Footer>
        <div>
        <Logo src={logo} alt="logo-footer" />
        </div>
        <IconsContainer>
            <Icons><a href="https://github.com/andreasvidal" target="_blank"></a><IoLogoGithub></IoLogoGithub></Icons>
            <Icons><a href="https://www.linkedin.com/in/m-andrea-salas" target="_blank"></a><IoLogoLinkedin/></Icons>
            <Icons><IoLogoWhatsapp/></Icons>
        </IconsContainer>
        </Footer>
    )
}

const Footer = styled.footer`
display: flex;
flex-wrap: wrap;
align-content: center;
justify-content: space-between;
align-items: center;
position: relative;
background: #B469EB;
border-top: 0.1rem solid #0D1C29;
width: auto;
margin: 0;
padding: 1rem 1.5rem;
 `;

 const Logo = styled.img`
 width: 3.5rem;
 border-radius: 50%;
 padding: 1rem;
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
  `;

const Icons = styled.i`
font-size: 2.125rem;
color: #0D1C29;
padding: 1rem;
&:hover {
    transition: 1s;
    cursor: pointer;
    transform: scale(1.15);

}
`;

const IconsContainer = styled.div`
display: flex;
align-content: center;
margin: 0;
`