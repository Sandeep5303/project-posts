import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="/login">
        <button>Link</button>
      </Link>
    </>
  );
};

export default HomePage;
