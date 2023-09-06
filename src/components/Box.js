import React from 'react';

const Box = ({ children }) => {
  return (
    <div className="box">
      {/* <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '–' : '+'}
      </button>

      {isOpen && children} */}
      {children}
    </div>
  );
};

export default Box;
