import React, { useState, useEffect } from "react";
import {
  updateStatusToFinished,
  deleteTask,
  getSortedData,
} from "../api/client";
import { Link, useNavigate } from "react-router-dom";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [sort, setSort] = useState("id ascending");
  const blueHex = "#28A745";
  const allFalse = {
    id_up: false,
    id_down: false,
    priority_up: false,
    priority_down: false,
    difficulty_up: false,
    difficulty_down: false,
    estimate_up: false,
    estimate_down: false,
    created_up: false,
    created_down: false,
  };
  const [arrowColor, setArrowColor] = useState({ ...allFalse, id_up: true });
  const navigate = useNavigate();

  useEffect(() => {
    async function getTask() {
      const [property, direction] = sort.split(" ");
      const data = await getSortedData(property, direction);
      setTasks(data);
    }
    getTask();
  }, [sort]);

  async function completeTask(e) {
    try {
      await updateStatusToFinished(e.target.value);
      navigate(0);
    } catch (err) {
      console.error(err.message);
    }
  }

  async function deleteById(e) {
    try {
      await deleteTask(e.target.value);
      navigate(0);
    } catch (err) {
      console.error(err.message);
    }
  }

  function renderArrowIcon(iconName, onClick, color) {
    return (
      <i
        className={`fa-solid fa-caret-${iconName} d-block`}
        style={{ color }}
        onClick={onClick}
      ></i>
    );
  }

  function handleSort(property, order, direction) {
    setSort(`${property} ${order}`);
    setArrowColor({ ...allFalse, [`${property}_${direction}`]: true });
  }

  //=============sorting============

  return (
    <div className="d-flex justify-content-center">
      <table className="table table-bordered table-dark mt-5 mb-5 ml-5 mr-5">
        <thead>
          <tr>
            <th className="text-center" scope="col">
              <span style={{ fontSize: "20px" }}>id</span>
              <div
                className="d-inline-block"
                style={{
                  verticalAlign: "middle",
                  float: "right",
                }}
              >
                {renderArrowIcon(
                  "up",
                  () => handleSort("id", "ascending", "up"),
                  arrowColor.id_up ? blueHex : "#ffffff"
                )}
                {renderArrowIcon(
                  "down",
                  () => handleSort("id", "descending", "down"),
                  arrowColor.id_down ? blueHex : "#ffffff"
                )}
              </div>
            </th>
            <th className="text-center" scope="col">
              <span style={{ fontSize: "20px" }}>name </span>
            </th>
            <th className="text-center" scope="col">
              <span style={{ fontSize: "20px" }}>priority </span>
              <div
                className="d-inline-block"
                style={{ verticalAlign: "middle", float: "right" }}
              >
                {renderArrowIcon(
                  "up",
                  () => handleSort("priority", "ascending", "up"),
                  arrowColor.priority_up ? blueHex : "#ffffff"
                )}
                {renderArrowIcon(
                  "down",
                  () => handleSort("priority", "descending", "down"),
                  arrowColor.priority_down ? blueHex : "#ffffff"
                )}
              </div>
            </th>
            <th className="text-center" scope="col">
              <span style={{ fontSize: "20px" }}>difficulty</span>
              <div
                className="d-inline-block"
                style={{ verticalAlign: "middle", float: "right" }}
              >
                {renderArrowIcon(
                  "up",
                  () => handleSort("difficulty", "ascending", "up"),
                  arrowColor.difficulty_up ? blueHex : "#ffffff"
                )}
                {renderArrowIcon(
                  "down",
                  () => handleSort("difficulty", "descending", "down"),
                  arrowColor.difficulty_down ? blueHex : "#ffffff"
                )}
              </div>
            </th>
            <th className="text-center" scope="col">
              <span style={{ fontSize: "20px" }}>estimated time</span>
              <div
                className="d-inline-block"
                style={{ verticalAlign: "middle", float: "right" }}
              >
                {renderArrowIcon(
                  "up",
                  () => handleSort("estimate", "ascending", "up"),
                  arrowColor.estimate_up ? blueHex : "#ffffff"
                )}
                {renderArrowIcon(
                  "down",
                  () => handleSort("estimate", "descending", "down"),
                  arrowColor.estimate_down ? blueHex : "#ffffff"
                )}
              </div>
            </th>
            <th className="text-center" scope="col">
              <span style={{ fontSize: "20px" }}>created at</span>
              <div
                className="d-inline-block"
                style={{ verticalAlign: "middle", float: "right" }}
              >
                {renderArrowIcon(
                  "up",
                  () => handleSort("created", "ascending", "up"),
                  arrowColor.created_up ? blueHex : "#ffffff"
                )}
                {renderArrowIcon(
                  "down",
                  () => handleSort("created", "descending", "down"),
                  arrowColor.created_down ? blueHex : "#ffffff"
                )}
              </div>
            </th>
            <th className="text-center" colSpan="3" scope="col">
              <span style={{ fontSize: "20px" }}>actions</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task, index) => (
              <tr key={index}>
                <td className="text-center">{task.id}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">{task.priority}</td>
                <td className="text-center">{task.difficulty}</td>
                <td className="text-center">{task.estimate}</td>
                <td className="text-center">{task.created}</td>
                <td className="text-center">
                  <button
                    value={task.id}
                    onClick={completeTask}
                    className="btn btn-success btn-sm"
                  >
                    done
                  </button>
                </td>
                <td className="text-center">
                  <button
                    value={task.id}
                    onClick={deleteById}
                    className="btn btn-danger btn-sm ml-1"
                  >
                    delete
                  </button>
                </td>
                <td className="text-center">
                  <Link to={`/edit/${task.id}`}>
                    <button
                      value={task.id}
                      className="btn btn-warning btn-sm ml-1"
                    >
                      edit
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Task;
