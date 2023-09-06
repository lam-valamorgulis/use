import React from 'react';
import React, { useState, useEffect, useRef } from 'react';

const SearchBox = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    const callBack = (e) => {
      if (document.activeElement === inputEl.current) return;
      if (e.code === 'Enter') {
        inputEl.current.focus();
        setQuery('');
      }
    };
    document.addEventListener('keydown', callBack);
    return () => document.removeEventListener('keydown', callBack);
  }, [setQuery]);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default SearchBox;
