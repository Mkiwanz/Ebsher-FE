import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const MyNavbar = () => {
  const isLoggedIn = Cookies.get("isLoggedIn");
  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-1 py-lg-0 px-lg-5">
      <button
        type="button"
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarCollapse"
      >
        <div className="navbar-nav ml-auto py-0">
          <div className="nav-item nav-link">
            <Link to="/" style={{ textDecoration: "none" , color: 'white'}}>
              Home
            </Link>
          </div>
          <a href="#about" className="nav-item nav-link">
            About
          </a>
          <a href="#service" className="nav-item nav-link">
            Service
          </a>
        </div>
        <a
          href="/"
          className="navbar-brand bg-primary px-4 mx-3 d-none d-lg-block"
        >
          <h1 className="display-4 text-white text-uppercase m-0">Ebsher</h1>
        </a>
        <div className="navbar-nav mr-auto py-0">
          <a href="#faqs" className="nav-item nav-link">
            FAQs
          </a>
          <a href="#contact" className="nav-item nav-link">
            Contact
          </a>
          {isLoggedIn ? (
            <div className="nav-item nav-link">
              <Link
                to="/newProject"
                style={{ textDecoration: "none", color: "white" }}
              >
                New Project
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};
export default MyNavbar;
