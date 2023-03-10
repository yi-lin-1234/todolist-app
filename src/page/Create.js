import React, { useState } from "react";
import { createTask } from "../api/client";

function Create() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("low");
  const [difficulty, setDifficulty] = useState("easy");
  const [estimate, setEstimate] = useState("mins");

  const [success, setSuccess] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      const body = {
        name,
        priority,
        difficulty,
        estimate,
      };

      createTask(body);
      setSuccess(true);
    } catch (err) {
      console.error(err.message);
    }

    setName("");
    setPriority("low");
    setDifficulty("easy");
    setEstimate("mins");
  }

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <form className="card p-3 bg-light w-50" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            size="50"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">priority:</label>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">low</option>
            <option value="moderate">moderate</option>
            <option value="high">high</option>
            <option value="urgent">urgent</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="difficulty">difficulty:</label>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">easy</option>
            <option value="moderate">moderate</option>
            <option value="hard">hard</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="estimate">estimated time:</label>
          <select
            className="custom-select"
            id="inputGroupSelect01"
            name="estimate"
            value={estimate}
            onChange={(e) => setEstimate(e.target.value)}
          >
            <option value="mins">mins</option>
            <option value="hours">hours</option>
            <option value="days">days</option>
            <option value="weeks">weeks</option>
            <option value="months">months</option>
            <option value="years">years</option>
          </select>
        </div>

        {success && (
          <div className="alert alert-success" role="alert">
            new task has been successfully created!
          </div>
        )}
        <button className="btn btn-primary btn-sm" type="submit">
          create
        </button>
      </form>
    </div>
  );
}

export default Create;
