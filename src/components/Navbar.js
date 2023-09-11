import React from 'react';
import { Logo, SearchBox, NumResult } from '../components';

const NavBar = ({ query, setQuery, movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBox query={query} setQuery={setQuery} />
      <NumResult movies={movies} />
    </nav>
  );
};

export default NavBar;
