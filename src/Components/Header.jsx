import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <img src="src/assets/NCNEWS.gif" />
      <Navbar />
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="NavBar">
      <Link to="/" className="Link">
        Home
      </Link>
    </nav>
  );
};
