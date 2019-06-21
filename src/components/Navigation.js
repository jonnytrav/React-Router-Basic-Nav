import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
        <Link to="/" />
        <div />
        <div>
          <Link to="/About">About</Link>
        </div>
        <div>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
