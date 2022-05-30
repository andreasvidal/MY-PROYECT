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
            <Icons><IoLogoGithub/></Icons>
            <Icons><IoLogoLinkedin/></Icons>
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
 width: 3rem;
 border-radius: 50%;
 padding: 1rem
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