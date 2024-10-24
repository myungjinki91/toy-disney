import { Link } from "react-router-dom";

interface ICharacter {
  image: string;
  name: string;
}

export default function Character({ image, name }: ICharacter) {
  return (
    <>
      <Link to="characters/1">
        <img src={image} />
        <h1>{name}</h1>
      </Link>
    </>
  );
}
