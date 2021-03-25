import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { PROJECT_FORM, GET_PROJECTS, ADD_PROJECT } from "../types/";
import { v4 as uuid } from "uuid";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "E-commerce" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Web Desing" },
    { id: 4, name: "E-commerce" },
    { id: 5, name: "Intranet" },
  ];

  const initialState = {
    form: false,
    projects: [],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: PROJECT_FORM,
    });
  };

  const getProjetcs = () => {
    dispatch({
      type: GET_PROJECTS,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuid();

    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        showForm,
        projects: state.projects,
        getProjetcs,
        addProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
