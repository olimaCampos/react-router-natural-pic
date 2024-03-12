import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/Home"> Home </Link> | <Link to="/Favorites"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
