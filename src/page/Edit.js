import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTaskById, updateTask } from "../api/client";

function Edit() {
  //=============================================

  const { id } = useParams();
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [estimate, setEstimate] = useState("");

  useEffect(() => {
    async function getTask() {
      const task = await getTaskById(id);
      setName(task.name);
      setPriority(task.priority);
      setDifficulty(task.difficulty);
      setEstimate(task.estimate);
    }
    getTask();
  }, []);

  async function handleOnUpdate(e) {
    e.preventDefault();
    try {
      const body = {
        name: name,
        priority: priority,
        difficulty: difficulty,
        estimate: estimate,
      };

      updateTask(id, body);
      setSuccess(true);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <form className="card p-3 bg-light w-50" onSubmit={handleOnUpdate}>
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
            Ticket has been successfully updated!
          </div>
        )}
        <button className="btn btn-warning btn-sm" type="submit">
          update
        </button>
      </form>
    </div>
  );
}

export default Edit;
