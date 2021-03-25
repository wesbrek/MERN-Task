import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../types/";
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
    formError: false,
    project: null,
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

  const showError = () => {
    dispatch({
      type: VALIDATE_FORM,
    });
  };

  const currentProject = (project) => {
    dispatch({
      type: CURRENT_PROJECT,
      payload: project,
    });
  };

  const deleteProject = (id) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: id,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        formError: state.formError,
        project: state.project,
        showForm,
        getProjetcs,
        addProject,
        showError,
        currentProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
