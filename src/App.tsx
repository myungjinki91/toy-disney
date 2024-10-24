import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px calc(100% - 150px) 100px;
`;

const Main = styled.main`
  margin: 0px 20px;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Container>
  );
}
