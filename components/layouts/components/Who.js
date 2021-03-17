import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const AboutContainer = styled.div`
  position: relative;
  font-family: "Inconsolata", monospace;
  @media (max-height: 900px) {
    margin-top: 150px;
  }
  @media (max-height: 550px) {
    margin-top: 250px;
  }
`;

export const AboutHeadline = styled.h1`
  text-align: center;
  color: white;
  font-family: "Roboto", sans-serif;
  @media (max-height: 900px) {
    margin-top: 100px;
  }
`;

export const OrangeLine = styled.div`
  width: 40px;
  height: 5px;
  background: #db6400;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 80px;
`;

const TechStackContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 700px) {
  }
`;

const TechStack = styled.div`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  height: 150px;
  width: 120px;
  background: #051e3e;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  @media (max-width: 700px) {
    height: 100px;
    width: 80px;
    padding: 10px;
  }
  @media (max-width: 390px) {
    height: 90px;
    width: 70px;
  }
`;

const TechHeadline = styled.p`
  font-size: 18px;
  color: white;
  margin-top: 20px;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

function About() {
  return (
    <AboutContainer>
      <AboutHeadline>Who am I</AboutHeadline>
      <OrangeLine></OrangeLine>
      <TechStackContainer>
        <TechStack>
          <Image src="/sales-icon.svg" width={60} height={70}></Image>
        </TechStack>
        <TechStack>
          <Image src="/teamwork-icon.svg" width={60} height={70}></Image>
        </TechStack>
        <TechStack>
          <Image src="/noroff-icon.png" width={30} height={50}></Image>
        </TechStack>
        <TechStack>
          <Image src="/feather-icon.svg" width={70} height={70}></Image>
        </TechStack>
      </TechStackContainer>
      <TechStackContainer>
        <TechHeadline>Sales</TechHeadline>
        <TechHeadline>Teamwork</TechHeadline>

        <TechHeadline className="noroff-icon-text">Noroff</TechHeadline>
        <TechHeadline className="tech-icon-text">Tech</TechHeadline>
      </TechStackContainer>
    </AboutContainer>
  );
}

export default About;
