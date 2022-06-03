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
            <Icons>
                <AnIcon href="https://github.com/andreasvidal" target="_blank">
                <IoLogoGithub/>
                </AnIcon>
            </Icons>
            <Icons>
                <AnIcon href="https://www.linkedin.com/in/m-andrea-salas" target="_blank">
                <IoLogoLinkedin/>
                </AnIcon>
                </Icons>
            <Icons>
                <AnIcon><IoLogoWhatsapp/></AnIcon>
            </Icons>
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
 border: 0.3rem outset #0d1c2930;
 border-radius: 50%;
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

const AnIcon = styled.a`
font-size: 2.125rem;
color: #0D1C29;
padding: 1rem;
`;

const IconsContainer = styled.div`
display: flex;
align-content: center;
margin: 0;
`
const Icons = styled.div`
color: #0D1C29;
&:hover {
    transition: 1s;
    cursor: pointer;
    transform: scale(1.15);
}
`
