import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export default function Footer() {
  return (
    <Nav>
      <div>Copyright 2024. The Walt Disney Company.</div>
      <div>All rights reserved.</div>
    </Nav>
  );
}
