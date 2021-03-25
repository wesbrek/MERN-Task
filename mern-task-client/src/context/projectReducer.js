import {
  PROJECT_FORM,
  GET_PROJECTS,
  ADD_PROJECT,
  VALIDATE_FORM,
  CURRENT_PROJECT,
  DELETE_PROJECT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case PROJECT_FORM:
      return {
        ...state,
        form: true,
      };

    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        formError: false,
      };

    case VALIDATE_FORM:
      return {
        ...state,
        formError: true,
      };

    case CURRENT_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload.id
        ),
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null,
      };

    default:
      return state;
  }
};
