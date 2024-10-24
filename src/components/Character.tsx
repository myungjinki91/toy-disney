import { Link } from "react-router-dom";
import styled from "styled-components";

interface ICharacter {
  image: string;
  name: string;
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

export default function Character({ image, name }: ICharacter) {
  return (
    <Link to="characters/1">
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
