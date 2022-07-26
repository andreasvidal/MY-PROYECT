import styled from "styled-components"


export const Hobbies = () => {
    return (
        <Main>
            <DivH2><H2>HOBBIE</H2></DivH2>
            <Container>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/85763e56-7b46-17ac-8073-d510365f6038.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/fd1522b4-bf54-deb1-8629-b5ae3d166dc5.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/d6d17471-59be-0373-756c-84c33ba55bc1.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/15cef6a0-b0a7-2aa3-fb1b-5d6644b2b3a1.jpg' alt="img proyecto rym"/>
            </Container>
            <Container>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/e6f844d1-b403-4064-1e0c-76258a42836d.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/0b4c131a-7880-0ec2-5a4f-99a7ed9baa02.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/9779119d-6549-a30b-2a9d-5c787fcc47f0.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/30495171-44f1-aef4-b27f-b74958f41f47.jpg' alt="img proyecto rym"/>
            </Container>
            <Container>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/e7df19c7-6354-cd77-05a5-5ecb46ac7ad1.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/215116bc-368e-a8f4-2daa-6f91d23fd967.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/fa7cee10-d334-7397-a2b6-0e7b3f3428e5.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/487834ef-c412-2e47-cdf8-f573fa72c6ef.jpg' alt="img proyecto rym"/>
            </Container>
            <Container>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/42f89da7-c845-bc1c-fdfc-a471d24f38a8.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/acab652b-7a8d-a8b1-ff45-3eacf9b33878.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/3519d6f3-4b04-28f0-5bd3-f1532a7cce84.jpg' alt="img proyecto rym"/>
                <Pic src='https://mcusercontent.com/58e31daebe3c1a67caaa38665/images/18bd6b31-85d5-233a-8c4e-999ab9577368.jpg' alt="img proyecto rym"/>
            </Container>
        </Main>
    )
}

const Main = styled.main`
padding: 0;
margin: 0;
outline: none;
`;


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
    transition: all .3s;
   cursor: pointer;
   transform: scale(2);
   object-fit: cover;
   border:none;
}
`