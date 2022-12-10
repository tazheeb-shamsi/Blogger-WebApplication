import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo"  />
        </div>
        <div className="links">
          <Link className="link" to="/?category=ART">
            <h6>ART</h6>
          </Link>
          <Link className="link" to="/?category=SCIENCE">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link" to="/?category=TECHNOLOGY">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link" to="/?category=CINEMA">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link" to="/?category=DESIGN">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link" to="/?category=HEALTH&DIET">
            <h6>HEALTH & DIET</h6>
          </Link>

          <span>john</span>
          <span>Logout</span>
          <span className="compose">
            <Link className="link" to="ComposePage">Compose</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
