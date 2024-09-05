import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  return (
    <div className="nav-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div
        className="nav-searchIcon"
        onClick={() => navigate(`/search/${searchTerm}`)}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default SearchBar;
