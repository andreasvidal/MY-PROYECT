
import { Link } from "react-router-dom";
import Picabeja from "../../assets/hobbies/picabeja.JPG"
import Pictur1 from "../../assets/hobbies/picture7.JPG"
import Pictur2 from "../../assets/hobbies/picture2.jpg"
import Pictur3 from "../../assets/hobbies/picture3.jpg"
import Pictur4 from "../../assets/hobbies/picture4.jpg"
import Picabeja2 from "../../assets/hobbies/picabeja2.JPG"
import Picbicho from "../../assets/hobbies/picbicho.JPG"
import Piccielo from "../../assets/hobbies/piccielo.JPG"
import Picflores from "../../assets/hobbies/picflores.JPG"
import Picgallo from "../../assets/hobbies/picgallo.JPG"
import Picgallo2 from "../../assets/hobbies/picgallo2.JPG"
import Picpajaro from "../../assets/hobbies/picpajaro.JPG"
import Piclagartija from "../../assets/hobbies/piclagartija.JPG"
import Picpaisaje from "../../assets/hobbies/picpaisaje.JPG"
import Picpaisaje2 from "../../assets/hobbies/picpaisaje2.JPG"
import Picpaisaje3 from "../../assets/hobbies/picpaisaje3.JPG"
import styled from "styled-components"


export const Hobbies = () => {
    return (
        <Main>
            <Link to="/" ><PTitle>HOBBIES</PTitle></Link>
            <DivH2><H2>FOTOGRAFÍAS</H2></DivH2>
            <Container>
                <Pic src={Pictur1} alt="img proyecto rym"/>
                <Pic src={Pictur2} alt="img proyecto rym"/>
                <Pic src={Pictur3} alt="img proyecto rym"/>
                <Pic src={Pictur4} alt="img proyecto rym"/>
            </Container>
            <Container>
                <Pic src={Picabeja2} alt="img proyecto rym"/>
                <Pic src={Picbicho} alt="img proyecto rym"/>
                <Pic src={Piccielo} alt="img proyecto rym"/>
                <Pic src={Picflores} alt="img proyecto rym"/>
            </Container>
            <Container>
                <Pic src={Picgallo} alt="img proyecto rym"/>
                <Pic src={Picgallo2} alt="img proyecto rym"/>
                <Pic src={Picpajaro} alt="img proyecto rym"/>
                <Pic src={Picabeja} alt="img proyecto rym"/>
            </Container>
            <Container>
                <Pic src={Piclagartija} alt="img proyecto rym"/>
                <Pic src={Picpaisaje} alt="img proyecto rym"/>
                <Pic src={Picpaisaje2} alt="img proyecto rym"/>
                <Pic src={Picpaisaje3} alt="img proyecto rym"/>
            </Container>
        </Main>
    )
}

const Main = styled.main`
padding: 0;
margin: 0;
outline: none;
`;

const PTitle = styled.p`
color: #B469EB;
text-decoration: none;
background: #0D1C29;
box-shadow: 0px 30px 12px rgba(0, 0, 0, 0.01), 0px 28px 11px rgba(0, 0, 0, 0.07), 0px 16px 9px rgba(0, 0, 0, 0.25), 0px 7px 7px rgba(0, 0, 0, 0.43), 0px 2px 4px rgba(0, 0, 0, 0.49), 0px 0px 0px rgba(0, 0, 0, 0.5);
backdrop-filter: blur(11px);
margin: 2rem 25%;
display: flex;
justify-content: center;
align-items: center;
height: 5rem;
padding: 0 1.5rem;
font-weight: 700;
font-size: 3vw;

&:hover {
   transition: 1s;
   cursor: pointer;
   transform: scale(1.15);
}
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
font-style: bold;
color: #B469EB;
font-weight: 700;
font-size: 3vw;
`;

const Pic = styled.img`
object-fit: cover;
width: 250px;
height: 250px;
border: solid 0.3rem #0d1c2966;
&:hover {
    transition: 1s;
   cursor: pointer;
   transform: scale(3);
   object-fit: cover;
   border:none
}
`