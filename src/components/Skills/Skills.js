import React from "react";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiNuxtdotjs } from "react-icons/si";
import styled from 'styled-components'

export const Skills = () => {
    return (
        <IconCont>
            <IconGrpup>
                <TitleSkill>SKILLS</TitleSkill>
                <Icon>
                    <SiJavascript />
                    <TitleP>Javascript</TitleP>
                </Icon>
                <Icon>
                    <SiCss3 />
                    <TitleP>CSS</TitleP>
                </Icon>
                <Icon>
                    <SiHtml5 />
                    <TitleP>HTML</TitleP>
                </Icon>
                <Icon>
                    <SiReact />
                    <TitleP>React JS</TitleP>
                </Icon>
                <Icon>
                    <SiFirebase />
                    <TitleP>Firebase</TitleP>
                </Icon>
                <Icon>
                    <SiReactrouter />
                    <TitleP>React Router</TitleP>
                </Icon>
                <Icon>
                    <SiGit />
                    <TitleP>GitHub</TitleP>
                </Icon>
                <Icon>
                    <SiFigma />
                    <TitleP>Figma</TitleP>
                </Icon>
                <Icon>
                    <SiStyledcomponents />
                    <TitleP>Styled Components</TitleP>
                </Icon>
                <Icon>
                    <SiNetlify />
                    <TitleP>Netlify</TitleP>
                </Icon>
                <Icon>
                    <SiNuxtdotjs />
                    <TitleP>NuxsJs</TitleP>
                </Icon>
            </IconGrpup>
        </IconCont>
    )
}

const Icon = styled.div`
 display: flex;
align-items: center;
flex-direction: column;
margin: 1rem;

        svg {
        width: 8vh;
        height: 8vh;
        margin: 1em;
        color: #ae8cfa;
        }
`

const IconCont = styled.div`
display: grid;
border-bottom: 0.1rem solid #ae8cfa;
background: #242132;
`

const IconGrpup = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
padding: 1rem;
margin: 0rem auto;
`

const TitleSkill = styled.h3`
margin-bottom: 1rem;
width: 100%;
font-size: 5vh;
font-weight: 700;
text-align: center;
color: #ae8cfa;
`

const TitleP = styled.p`
font-style: bold;
color: #ae8cfa;
font-weight: 400;
`