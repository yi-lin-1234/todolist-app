import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 mx-auto text-center">
          <div className="card bg-light">
            <div className="card-body">
              <h3 className="card-title">404 - Page not found</h3>
              <p className="card-text">
                The page you are looking for does not exist.
              </p>
              <Link to="/" className="btn btn-primary">
                Go to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
