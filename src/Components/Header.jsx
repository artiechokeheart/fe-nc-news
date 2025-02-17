import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <h1>NC News</h1>
      <Navbar />
    </>
  );
};

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
    </nav>
  );
};
