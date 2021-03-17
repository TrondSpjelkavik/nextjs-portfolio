import styled from "styled-components";

import { FaGithub } from "react-icons/fa";

export const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  margin: 80px 0 0 20px;
  font-family: "Inconsolata", monospace;
  @media (max-width: 800px) {
    align-items: center;
    margin: 100px 0 0 20px;
  }
`;

export const ProjectInfoHeadline = styled.h1`
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 24px;
`;

export const ProjectInfoParagraph = styled.p`
  color: white;
  max-width: 350px;
  font-size: 16px;
  @media (max-width: 800px) {
    max-width: 320px;
  }
`;

export const ProjectInfoButton = styled.button`
  color: white;
  background: #651e3e;
  border: none;
  padding: 10px;
  font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  &:hover {
    background: #db6400;
  }
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;

export const ProjectInfoButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  @media (max-width: 800px) {
    align-items: flex-start;
    width: 320px;
  }
`;

export const ProjectInfoButtonContainerSpacex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

export const ProjectImage = styled.img`
  position: absolute;
  top: 120px;
  right: 10px;
  height: 300px;
  @media (max-width: 800px) {
    display: none;
  }
`;

function Project({ projects, projectNumber }) {
  let siteText = "";
  let buttonClass = "";

  if (projects[projectNumber].site) {
    siteText = "View site";
  } else if (projects[projectNumber].site === null) {
    siteText = "";
    buttonClass = "hidden";
  }

  let gradeText = "";
  let buttonClassTwo = "";

  if (projects[projectNumber].grades) {
    gradeText = "View grades";
  } else if (projects[projectNumber].grades === null) {
    gradeText = "";
    buttonClassTwo = "hidden";
  }

  function toSite() {
    window.open(projects[projectNumber].site);
  }

  function toGithub() {
    window.open(projects[projectNumber].github);
  }

  function toGrades() {
    window.open(projects[projectNumber].grades);
  }

  return (
    <ProjectInfoContainer>
      <ProjectInfoHeadline>
        {projects[projectNumber].headline}
      </ProjectInfoHeadline>
      <ProjectInfoParagraph>
        {projects[projectNumber].sub_headline}
      </ProjectInfoParagraph>
      <ProjectInfoParagraph>
        {projects[projectNumber].paragraph}
      </ProjectInfoParagraph>
      <ProjectInfoButtonContainerSpacex>
        <ProjectInfoButton className={buttonClass} onClick={toSite}>
          {siteText}
        </ProjectInfoButton>
        <ProjectInfoButton className={buttonClassTwo} onClick={toGrades}>
          {gradeText}
        </ProjectInfoButton>

        <FaGithub className="github-icon" onClick={toGithub}>
          To github
        </FaGithub>
      </ProjectInfoButtonContainerSpacex>
      <ProjectImage src={projects[projectNumber].image}></ProjectImage>
    </ProjectInfoContainer>
  );
}

export default Project;
