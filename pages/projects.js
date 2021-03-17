import Projects from "../components/layouts/Projects";
import { server } from "../config";

function projects({ projects }) {
  return <Projects projects={projects}></Projects>;
}

export default projects;

export const getServerSideProps = async () => {
  const projectRes = await fetch(`${server}/api/portfolio/projects/`);

  const projects = await projectRes.json();

  return {
    props: {
      projects,
    },
  };
};
