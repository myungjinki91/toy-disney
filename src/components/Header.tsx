import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  display: flex;
`;

const EmptyDiv = styled.div`
  height: 100px;
`;

export default function Header() {
  return (
    <>
      <Nav>
        <Link to="">Back icon</Link>
        <h1>Disney Logo</h1>
      </Nav>
      <EmptyDiv />
    </>
  );
}
