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
    <nav className="flex items-center justify-center">
      <Link to="/">Home</Link>
    </nav>
  );
};
