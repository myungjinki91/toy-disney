import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import React from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("https://i.pinimg.com/originals/4b/e3/53/4be353c5dfb290422be018e67f89c9db.gif");
  background-size: contain;
`;

const Main = styled.main`
  margin: 82px 24px 0px 24px;
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
