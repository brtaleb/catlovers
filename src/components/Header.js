import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <Link to="/">
        <h2>CATLOVERS</h2>
      </Link>

      <div>
        <Link to="/">
          <span className="nav-item">
            All Breeds
          </span>
        </Link>

        <Link to="/favorites">
          <span className="nav-item">
            Favorites
          </span>
        </Link>
      </div>
    </div>
  )
}
export default Header;
