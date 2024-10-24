import styled from "styled-components";
import Layout from "./Layout";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 292px);
`;

export default function App() {
  return (
    <Layout>
      <Container>Not Found</Container>
    </Layout>
  );
}
