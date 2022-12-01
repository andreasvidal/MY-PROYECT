import { FooterCommons } from "../commons/Footer";
import { Titlecommons } from "../commons/Title";
import { AboutMe } from "../components/AbouteMe/AbouteMe";
import { ShowProyects } from "../components/ShowProyects/ShowProyects";
import { Hobbies } from "../components/hobbie/Hobbie";
import { Skills } from "../components/Skills/Skills";
import styled from "styled-components";

export const Home = () => {
  return (
    <>
      <DivHome>
        <Titlecommons />
        <AboutMe />
      </DivHome>
      <Skills />
      <ShowProyects />
      <Hobbies />
      <FooterCommons />
    </>
  );
};

const DivHome = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
  & @media (max-width: 744px) {
    display: flex;
  }
`;
