import Animation from "../components/layouts/components/Animation";
import Who from "../components/layouts/components/Who";
import Chart from "../components/layouts/components/Chart";
import About from "../components/layouts/components/About";
import { server } from "../config";

export default function Home({ portfolio }) {
  return (
    <div>
      <Animation></Animation>
      <Who></Who>
      <Chart portfolio={portfolio}></Chart>
      <About portfolio={portfolio}></About>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/portfolio/`);

  const portfolio = await res.json();

  return {
    props: {
      portfolio,
    },
  };
};
