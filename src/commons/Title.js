import styled from 'styled-components'
import Banner from '../assets/logos/banner.jpg'

export const Titlecommons = () => {
    return(
        <div>
                <Title>WELCOME TO MY WORLD!</Title>
        <ImgBanner src={Banner} alt="img banner universo"  />
        </div>
    )
}

const Title = styled.h1`
display: flex;
align-items: center;
text-align: center;
justify-content: center;
font-size: 2.5rem;
font-weight: 700;
color: #ae8cfa;
margin: 10% 25%;
position: absolute;
background: #242132d1;
padding: 1rem 2rem;
border-radius:0.5rem;
text-shadow: 0.1rem 0.1rem #242132c7;
z-index: 2;
 `;

 const ImgBanner = styled.img`
    width:100%;
    margin-top: -3rem;
 `