import React from "react";
import Project from "./Project";

const ListProjects = () => {
  const projects = [
    { name: "E-commerce" },
    { name: "Intranet" },
    { name: "Web Desing" },
    { name: "E-commerce" },
    { name: "Intranet" },
    { name: "Web Desing" },
    { name: "E-commerce" },
    { name: "Intranet" },
    { name: "Web Desing" },
    { name: "E-commerce" },
    { name: "Intranet" },
    { name: "Web Desing" },
  ];

  const displayProjects = (project, e) => {
    return <Project project={project} key={e} />;
  };

  return <ul className="listado-proyectos">{projects.map(displayProjects)}</ul>;
};

export default ListProjects;
