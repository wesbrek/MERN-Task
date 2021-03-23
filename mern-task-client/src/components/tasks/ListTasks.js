import React, { Fragment } from "react";
import Task from "./Task";

const ListTask = () => {
  const tasks = [
    { name: "Task 1", state: true },
    { name: "Task 1", state: true },
    { name: "Task 1", state: false },
    { name: "Task 1", state: true },
    { name: "Task 1", state: false },
    { name: "Task 1", state: true },
  ];

  const displayTasks = (task, e) => {
    return <Task task={task} key={e} />;
  };

  return (
    <Fragment>
      <h2>Project: E-commerce</h2>

      <ul className="task-list">
        {tasks.length === 0 ? <li>No task added</li> : tasks.map(displayTasks)}
        <button type="button" className="btn btn-delete">
          Delete Project &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListTask;
