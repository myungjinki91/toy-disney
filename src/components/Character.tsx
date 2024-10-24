import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICharacter {
  id: number;
  name: string;
  image?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  width: 190px;
  height: 190px;
  overflow: hidden;
  object-fit: fill;
  img {
    transition: all 0.2s linear;
    width: 100%;
    height: 100%;
  }
  img:hover {
    transform: scale(1.2) rotateZ(360deg);
  }
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #373c8b;
  width: 190px;
  height: 32px;
  color: white;
`;

export default function Character({ name, image, id }: ICharacter) {
  return (
    <Link to={`characters/${id}`}>
      <Container>
        <Image>
          <img src={image} />
        </Image>
        <Name>
          <span>{name}</span>
        </Name>
      </Container>
    </Link>
  );
}
