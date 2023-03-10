import React, { useState, useEffect } from "react";
import { getAllfinishedTasks } from "../api/client";

function History() {
  const [finishedTasks, setFinishedTasks] = useState([]);

  useEffect(() => {
    async function getFinished() {
      const data = await getAllfinishedTasks();
      setFinishedTasks(data);
    }
    getFinished().catch(console.error);
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <table className="table table-bordered table-dark mt-5 mb-5 ml-5 mr-5">
        <thead>
          <tr>
            <td className="text-center">id</td>
            <td className="text-center">name</td>
            <td className="text-center">priority</td>
            <td className="text-center">difficulty</td>
            <td className="text-center">estimated time</td>
            <td className="text-center">created at</td>
            <td className="text-center">finished at</td>
          </tr>
        </thead>
        <tbody>
          {finishedTasks &&
            finishedTasks.map((task, index) => (
              <tr key={index}>
                <td className="text-center">{task.id}</td>
                <td className="text-center">{task.name}</td>
                <td className="text-center">{task.priority}</td>
                <td className="text-center">{task.difficulty}</td>
                <td className="text-center">{task.estimate}</td>
                <td className="text-center">{task.created}</td>
                <td className="text-center">{task.finished}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
