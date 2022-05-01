import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const nones = {
  textDecoration: "none",
};

function Header(props) {
  return (
    <div className="header">
      <h1>
        <Link style={nones} to="/">
          {" "}
          Home
        </Link>{" "}
      </h1>
      <h1>
        {" "}
        <Link style={nones} to="/login">
          Sign In{" "}
        </Link>{" "}
      </h1>

      <h1>
        <Link style={nones} to="/register">
          {" "}
          Sign Up
        </Link>{" "}
      </h1>
    </div>
  );
}

export default Header;
