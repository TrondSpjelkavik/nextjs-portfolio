import Projects from "../components/layouts/Projects";
import Meta from "../components/Meta";

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

export const getStaticProps = async () => {
  const projectRes = await fetch(
    `http://localhost:3000/api/portfolio/projects/`
  );

  const projects = await projectRes.json();

  return {
    props: {
      projects,
      fallback: false,
    },
  };
};
