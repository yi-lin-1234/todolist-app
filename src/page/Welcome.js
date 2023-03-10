import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to My Task Manager App!</h1>
        <p className="lead">
          This is a simple task manager application built with React and Spring.
        </p>
        <hr className="my-4" />
        <p>
          Click the button below to view your tasks and get started managing
          them.
        </p>
        <Link className="btn btn-primary btn-lg" to="/task" role="button">
          View Tasks
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
