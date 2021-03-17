import { AboutContainer, AboutHeadline, OrangeLine } from "./Who";
import Image from "next/image";

import styled from "styled-components";

const AboutMeText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  max-width: 600px;
  font-size: 18px;
  border-left: 3px solid #051e3e;
  padding-left: 20px;
  @media (max-width: 800px) {
    border: none;
    padding: 40px 0 0 0;
    height: 300px;
    margin: 0 10px 50px 10px;
  }
  @media (max-width: 445px) {
    margin-bottom: 100px;
  }
  @media (max-width: 365px) {
    margin-bottom: 150px;
  }
`;

const AboutMeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const AboutMeParagraph = styled.p`
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

function About({ portfolio }) {
  return (
    <AboutContainer>
      <AboutHeadline>About me</AboutHeadline>
      <OrangeLine></OrangeLine>
      <AboutMeBox>
        <div style={{ paddingRight: "40px" }}>
          <Image src="/trond.png" width={225} height={225}></Image>
        </div>
        {portfolio.map((items) => (
          <AboutMeText key={items.About}>
            <AboutMeParagraph style={{ fontWeight: "700" }}>
              {items.About[0].text}
            </AboutMeParagraph>
            <AboutMeParagraph>{items.About[1].text}</AboutMeParagraph>
            <AboutMeParagraph>{items.About[2].text}</AboutMeParagraph>
            <AboutMeParagraph>{items.About[3].text}</AboutMeParagraph>
          </AboutMeText>
        ))}
      </AboutMeBox>
    </AboutContainer>
  );
}

export default About;
