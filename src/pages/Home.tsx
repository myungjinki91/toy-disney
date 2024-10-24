import styled from "styled-components";
import Character from "../components/Character";
import { db } from "../db";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 1px;
  place-items: center;
`;

export default function Main() {
  const characters = db.characters;
  return (
    <Layout>
      {characters.map((character, index) => {
        return (
          <Character
            key={index}
            image={character.imageUrl}
            name={character.name}
          />
        );
      })}
    </Layout>
  );
}
