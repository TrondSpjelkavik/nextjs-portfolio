import Meta from "./Meta";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";

import styled from "styled-components";

const GlobalLayoutContainer = styled.main``;

function GlobalLayout({ children, portfolio }) {
  return (
    <>
      <Meta></Meta>
      <Nav></Nav>
      <GlobalLayoutContainer>{children}</GlobalLayoutContainer>
      <Footer portfolio={portfolio}></Footer>
    </>
  );
}

export default GlobalLayout;
