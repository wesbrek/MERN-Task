import React, { Fragment, useContext, useState } from "react";
import projectContext from "../../context/projectContext";

const NewProject = () => {
  const projectsContext = useContext(projectContext);
  const { form, showForm } = projectsContext;

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
    </Fragment>
  );
};

export default NewProject;
