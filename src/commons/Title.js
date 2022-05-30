import styled from 'styled-components'
export const Titlecommons = () => {
    return(
        <Title>WELCOME TO MY (HELLO) WORLD!</Title>
    )
}

const Title = styled.h1`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
font-family: 'Anonymous Pro';
font-size: 1.5rem;
color: #B469EB;
margin: auto 25%;
padding: 2rem;
background: rgba(180, 105, 235, 0.03);
box-shadow: 0px 3px 20px #B469EB;
backdrop-filter: blur(90px)
 `;