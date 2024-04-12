import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => (
  <div className="bg-container">
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="nav-container">
        <div>
          <p className="navbar-brand">MoviesDB</p>
        </div>
        <div className="flex-container">
          <Link to="/">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <p>Upcoming</p>
        </div>
        <div>
          <input className="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;
