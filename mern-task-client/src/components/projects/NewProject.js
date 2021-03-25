import React, { Fragment, useContext, useState } from "react";
import ProjectContext from "../../context/projectContext";

const NewProject = () => {
  const projectsContext = useContext(ProjectContext);
  const { form, showForm, addProject, showError, formError } = projectsContext;

  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (project.name === "") return showError();

    addProject(project);

    setProject({
      name: "",
    });
  };

  const onClickShowForm = () => showForm();

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primary"
        onClick={onClickShowForm}
      >
        New Project
      </button>

      {form && (
        <form className="form-new-project" onSubmit={onSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="New Project"
            name="name"
            value={name}
            onChange={onChange}
          />

          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Add project"
          />
        </form>
      )}

      {formError && (
        <p className="message error">Please field a name for the project</p>
      )}
    </Fragment>
  );
};

export default NewProject;
