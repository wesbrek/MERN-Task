import React, { Fragment, useContext } from "react";
import ProjectContext from "../../context/projectContext";
import Task from "./Task";

const ListTask = () => {
  const projectContext = useContext(ProjectContext);
  const { project, deleteProject } = projectContext;

  if (project === null) return <h2>Select a Project</h2>;

  const [currentProject] = project;
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

  const onClickDeleteProject = () => {
    deleteProject(currentProject.id);
  };

  return (
    <Fragment>
      <h2>Project: {currentProject.name} </h2>

      <ul className="task-list">
        {tasks.length === 0 ? <li>No task added</li> : tasks.map(displayTasks)}
        <button
          type="button"
          className="btn btn-delete"
          onClick={onClickDeleteProject}
        >
          Delete Project &times;
        </button>
      </ul>
    </Fragment>
  );
};

export default ListTask;
