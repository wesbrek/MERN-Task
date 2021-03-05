import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    passworrd: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: [e.target.value],
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-user">
      <div className="container-form dark-shadow">
        <h1>Login</h1>

        <form onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Login"
            />
          </div>
        </form>

        <Link to={'/new-user'} className="link-account" >Create account</Link>
      </div>
    </div>
  );
};

export default Login;
