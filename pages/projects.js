import Projects from "../components/layouts/Projects";

function projects({ projects }) {
  return <Projects projects={projects}></Projects>;
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
    },
  };
};
