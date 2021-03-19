import { AboutContainer, AboutHeadline, OrangeLine } from "./Who";

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

const PortfolioImg = styled.img`
  padding-right: 40px;
  height: 244px;
  width: 242px;
  @media (max-width: 800px) {
    padding: 0;
  }
`;

function About({ portfolio }) {
  return (
    <AboutContainer>
      <AboutHeadline>About me</AboutHeadline>
      <OrangeLine></OrangeLine>
      {portfolio.map((items) => (
        <AboutMeBox key={items.About}>
          <PortfolioImg
            src={items.Assets[6].trond}
            alt="profile image"
          ></PortfolioImg>

          <AboutMeText>
            <AboutMeParagraph style={{ fontWeight: "700" }}>
              {items.About[0].text}
            </AboutMeParagraph>
            <AboutMeParagraph>{items.About[1].text}</AboutMeParagraph>
            <AboutMeParagraph>{items.About[2].text}</AboutMeParagraph>
            <AboutMeParagraph>{items.About[3].text}</AboutMeParagraph>
          </AboutMeText>
        </AboutMeBox>
      ))}
    </AboutContainer>
  );
}

export default About;
