import Projects from "../components/layouts/Projects";
import Meta from "../components/Meta";
import { server } from "../config";

function projects({ projects }) {
  return (
    <>
      <Meta
        title={projects[3].title}
        description={projects[3].description}
      ></Meta>
      <Projects projects={projects}></Projects>
    </>
  );
}

export default projects;

export const getServerSideProps = async () => {
  const projectRes = await fetch(`${server}/api/portfolio/projects/`);

  const projects = await projectRes.json();

  return {
    props: {
      projects,
      fallback: false,
    },
  };
};
