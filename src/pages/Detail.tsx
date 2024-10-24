import styled from "styled-components";
import { db } from "../db";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  min-height: 90vh;
  height: fit-content;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  color: white;
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
  border: 2px solid black;
  border-radius: 4px;
  padding: 8px;
  background-color: white;
  font-size: 24px;
`;

interface ICharacter {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

async function getCharacter(id: string) {
  return fetch(
    `https://disney_api.nomadcoders.workers.dev/characters/${id}`
  ).then((response) => response.json());
}

export default function Detail() {
  const { id } = useParams();

  if (typeof id !== "string") {
    return (
      <Layout>
        <div>Error: Invalid character ID</div>
      </Layout>
    );
  }

  const { isLoading, data } = useQuery<ICharacter>(["f", id], () => {
    return getCharacter(id);
  });
  return (
    <Layout>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <Profile>
            <Image src={data?.imageUrl} />
            <Name>{data?.name}</Name>
          </Profile>
          <Wiki>
            <Link to={`${data?.sourceUrl}`}>Go to wiki</Link>
          </Wiki>
          <Films>
            {data?.films.map((film) => (
              <Film key={film}>{film}</Film>
            ))}
          </Films>
        </>
      )}
    </Layout>
  );
}
