import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <h1 className="text-5xl font-extrabold dark:text-white flex items-center justify-center">
        NC News
      </h1>
      <Navbar />
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center m-2 p-4">
      <Link to="/" className="m-2">
        Home
      </Link>
      <Link to="/topics" className="m-2">
        Topics
      </Link>
    </nav>
  );
};
