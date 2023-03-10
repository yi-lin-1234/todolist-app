import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#212529" }}
      >
        <div className="navbar-brand">
          <Link to="/" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            todolist
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/task"
                style={{ color: "#FFFFFF" }}
              >
                tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new" style={{ color: "#FFFFFF" }}>
                new
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/history"
                style={{ color: "#FFFFFF" }}
              >
                history
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
