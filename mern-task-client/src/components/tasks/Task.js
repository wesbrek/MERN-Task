import React from "react";

const Task = ({ task }) => {
  return (
    <li className="task shadow">
      <p>{task.name}</p>

      <div className="state">
        {task.state ? (
          <button type="button" className="complete">
            Done
          </button>
        ) : (
          <button type="button" className="incomplete">
            Not done
          </button>
        )}
      </div>

      <div className="actions">
        <button type="button" className="btn btn-primary">
          Save
        </button>

        <button type="button" className="btn btn-secondary">
          Edit
        </button>
      </div>
    </li>
  );
};

export default Task;
