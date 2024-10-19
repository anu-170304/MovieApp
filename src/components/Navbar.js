
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  const [search, setSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search) navigate(`/search/${search}`);
  };

  return (
    <nav className="navbar">
      <Link to="/" style={{textDecoration:"none",color:"white"}}>
        <h2 className="navbar-title" style={{fontWeight:"600"}}>MovieDb.</h2>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Popular
          </Link>
        </li>
        <li>
          <Link to="/top-rated" onClick={() => setIsMenuOpen(false)}>
            Top Rated
          </Link>
        </li>
        <li>
          <Link to="/upcoming" onClick={() => setIsMenuOpen(false)}>
            Upcoming
          </Link>
        </li>
      </ul>

      <form onSubmit={handleSearch} className="navbar-search">
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" style={{borderRadius:"10px"}}>Search</button>
      </form>
    </nav>
  );
}

export default Navbar;
