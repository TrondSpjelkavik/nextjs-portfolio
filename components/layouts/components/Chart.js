import Experience from "./Experience";

function Chart({ portfolio }) {
  return (
    <div>
      {portfolio.map((skills) => (
        <Experience key={skills.Experience[0].id} skills={skills}></Experience>
      ))}
    </div>
  );
}

export default Chart;
