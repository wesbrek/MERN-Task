import React, { useContext, useEffect } from "react";
import ProjectContext from "../../context/projectContext";
import Project from "./Project";

const ListProjects = () => {
  const projectContext = useContext(ProjectContext);

  const { projects, getProjetcs } = projectContext;

  useEffect(() => {
    getProjetcs();
  }, []);

  const displayProjects = (project, e) => {
    return <Project project={project} key={e} />;
  };

  return (
    projects && (
      <ul className="listado-proyectos">{projects.map(displayProjects)}</ul>
    )
  );
};

export default ListProjects;
