import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  margin: 82px 24px;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container>
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  );
}
