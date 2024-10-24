import styled from "styled-components";
import { db } from "../db";
import { Link } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: calc(100vh - 264px);
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
`;

const Wiki = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(204, 255, 26);
  background: linear-gradient(
    90deg,
    rgba(204, 255, 26, 1) 0%,
    rgba(254, 109, 255, 1) 100%
  );
  border-radius: 8px;
  min-width: 300px;
  height: 50px;
  color: white;
`;

const Name = styled.div`
  font-size: 32px;
`;

const Films = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Film = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px;
`;

export default function Detail() {
  const character = db.character;
  return (
    <Layout>
      <Profile>
        <Image src={character.imageUrl} />
        <Name>{character.name}</Name>
      </Profile>
      <Wiki>
        <Link to={`${character.sourceUrl}`}>Go to wiki</Link>
      </Wiki>
      <Films>
        {character.films.map((film) => (
          <Film key={film}>{film}</Film>
        ))}
      </Films>
    </Layout>
  );
}
