import React, { useContext } from "react";
import ProjectContext from "../../context/projectContext";

const Project = ({ project }) => {
  const projectContext = useContext(ProjectContext);
  const { currentProject } = projectContext;

  const onClickProject = () => {
    currentProject(project);
  };

  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={onClickProject}>
        {project.name}
      </button>
    </li>
  );
};

export default Project;
