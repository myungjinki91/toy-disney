import styled from "styled-components";
import Character from "../components/Character";
import { db } from "../db";

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 190px);
  grid-template-rows: repeat(auto-fit, calc(190px + 32px));
  justify-content: center;
  gap: 2px;
  margin-top: 2px;
  min-height: 90vh;
  height: fit-content;
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
