import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="ui column stackable center aligned page grid">
      <div className="column twelve wide">
        <Link to="/repos" className="massive ui button">Enter</Link>
      </div>
    </div>
  );
};

export default Main;