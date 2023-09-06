import React from 'react';
import { Logo, SearchBox, NumResult } from '../components';

const NavBar = ({ query, setQuery }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBox query={query} setQuery={setQuery} />
      <NumResult />
    </nav>
  );
};

export default NavBar;
