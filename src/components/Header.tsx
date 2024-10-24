import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  background-color: #373c8b;
  width: 100%;
  height: 50px;
`;

const BackIcon = styled.div`
  position: absolute;
  left: 24px;
  color: white;
  font-size: 32px;
`;

const HeaderLogo = styled.img`
  width: 100px;
`;

const GitHub = styled.div`
  position: absolute;
  right: 24px;
`;

const GitHubImage = styled.img`
  width: 50px;
`;

export default function Header() {
  return (
    <>
      <Nav>
        <BackIcon>
          <Link to="/">
            <div>⬅</div>
          </Link>
        </BackIcon>
        <HeaderLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Disney_wordmark.svg/1400px-Disney_wordmark.svg.png?20171113041617" />
        <GitHub>
          <a href="https://www.github.com/" target="_blank">
            <GitHubImage src="/public/github.svg" />
          </a>
        </GitHub>
      </Nav>
    </>
  );
}
