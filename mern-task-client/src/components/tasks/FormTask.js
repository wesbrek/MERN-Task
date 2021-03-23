import React from "react";

const FormTask = () => {
  return (
    <div className="form">
      <form>
        <div className="container-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name"
            name="task"
          ></input>
        </div>
        <div className="container-input">
          <input
            type="submit"
            className="btn btn-primary btn-submit btn-block"
            value="Add task"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default FormTask;
