import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewUser = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { name, email, password, confirm } = newUser;

  const onSubmit = () => {};

  const onChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <div className="form-user">
      <div className="container-form dark-shadow">
        <h1>Sign in</h1>

        <form onSubmit={onSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              onChange={onChange}
              value={name}
            ></input>
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              onChange={onChange}
              value={email}
            ></input>
          </div>

          <div className="form-field">
            <label htmlFor="Password">Password</label>
            <input
              type="Password"
              id="Password"
              name="Password"
              placeholder="Your Password"
              onChange={onChange}
              value={password}
            ></input>
          </div>

          <div className="form-field">
            <label htmlFor="Confirm Password">Confirm Password</label>
            <input
              type="password"
              id="Confirm Password"
              name="Confirm Password"
              placeholder="Confirm Password"
              onChange={onChange}
              value={confirm}
            ></input>
          </div>

          <div className="form-field">
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Sign in"
            />
          </div>
          <Link to={"/"} className="link-account">
            Return to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NewUser;
