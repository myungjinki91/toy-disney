import { Link } from "react-router-dom";

export default function Character() {
  return (
    <>
      <Link to="characters/1">
        <h1>Image</h1>
        <h1>Name</h1>
      </Link>
    </>
  );
}
