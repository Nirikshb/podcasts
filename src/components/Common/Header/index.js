import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  // Use the 'useLocation' hook to get the current URL path.
  const location = useLocation();
  const currentPath = location.pathname;

  // Log the current path to the console for debugging or tracking.
  console.log("Current Path:", currentPath);

  return (
    <div className="navbar">
      <div className="gradient">
        <div className="links">
          {/* Creating navigation links using 'Link' components from 'react-router-dom' */}
          <Link to="/" className={currentPath === '/' ? 'active' : ''}>
            Sign Up
          </Link>
          <Link
            to="/start-a-podcast"
            className={currentPath === '/start-a-podcast' ? 'active' : ''}
          >
            Start A Podcast
          </Link>
          <Link
            to="/profile"
            className={currentPath === '/profile' ? 'active' : ''} >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
