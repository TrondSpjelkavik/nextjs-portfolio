import Head from "next/head";

function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Trond Fuglseth Spjelkavik",
  keywords:
    "responsive web design, react, front end developer, portfolio, trond spjelkavik ",
  description:
    "Front-End developer portfolio for Trond Fuglseth Spjelkavik. Includes projects for e-commerce, Go lang and SpaceX microsite. Is currently a student @ Noroff - School of technology and digital media",
};
export default Meta;
