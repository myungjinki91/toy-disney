import styled from "styled-components";
import { db } from "../db";
import { Link } from "react-router-dom";

const Layout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 30vh 70vh;
  gap: 50px;
  justify-content: center;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;

const Films = styled.div``;

const Film = styled.div``;

export default function Detail() {
  const character = db.character;
  return (
    <Layout>
      <Profile>
        <Link to={`${character.sourceUrl}`}>
          <img src={character.imageUrl} />
          <div>{character.name}</div>
        </Link>
      </Profile>
      <Films>
        {character.films.map((film) => (
          <Film key={film}>{film}</Film>
        ))}
      </Films>
    </Layout>
  );
}
