import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">
        <i className="fa-brands nav-logo fa-youtube"></i>
      </Link>

      <SearchBar />
    </nav>
  );
}

export default Navbar;
