import styled from "styled-components";
import Character from "../components/Character";
import { useQuery } from "@tanstack/react-query";
import { db } from "../db";
import { useEffect, useState } from "react";

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

interface ICharacters {
  id: number;
  name: string;
  imageUrl?: string;
}

async function getCharacter() {
  return fetch("https://disney_api.nomadcoders.workers.dev/characters ").then(
    (response) => response.json()
  );
}

export default function Main() {
  const { isLoading, data } = useQuery<ICharacters[]>([""], getCharacter);

  return (
    <Layout>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        data
          ?.map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
          .map((character, index) => (
            <Character
              key={index}
              image={character.imageUrl}
              name={character.name}
            />
          ))
      )}
    </Layout>
  );
}
