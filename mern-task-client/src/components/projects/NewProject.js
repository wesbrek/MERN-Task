import React, { Fragment, useState } from "react";

const NewProject = () => {
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

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primary">
        New Project
      </button>

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
    </Fragment>
  );
};

export default NewProject;
