import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [checked, setchecked] = useState(false);

  const handleCheckBox = () => {
    setchecked(!checked);
  };
  const check = (e) => {
    e.preventDefault();
    alert("hello");
  };
  return (
    <>
      <div id="login" className="container border border-3 my-5 col-6 login">
        <div className="mx-3 my-3 border border-2">
          <div className="mt-3">
            <p className="text-center fw-bold fs-2" style={{ color: "gray" }}>
              Log In
            </p>
            <p className="text-center">
              <i
                className="fas fa-user fa-6x text-center fw-bold color=orange-400"
                style={{ color: "orange" }}
              ></i>
            </p>
          </div>
          <form onSubmit={check}>
            <div className="my-4 mx-5 ">
              <i className="fas fa-user-tie fw-bold fs-4 mx-2"></i>
              <input
                type="text"
                placeholder="username or email"
                id="name"
                minLength={5}
                size={60}
                className="rounded-pill px-3 py-1"
                style={{ width: "85%" }}
              />
            </div>
            <div className="my-4 mx-5 ">
              <i className="fas fa-lock fw-bold fs-4 mx-2"></i>
              <input
                type={checked ? "text" : "password"}
                placeholder="Password"
                minLength={8}
                size={60}
                className="rounded-pill px-3 py-1"
                style={{ width: "85%" }}
              />
            </div>
            <div className="my-4 mx-5 mt-1">
              <span className="mx-5">
                <input
                  type="checkbox"
                  onChange={handleCheckBox}
                  id="check"
                  className="fs-4 mx-1"
                />
                <label htmlFor="check">Show Password</label>
              </span>
            </div>
            <div class="d-grid gap-3 mx-5 my-3">
              <input
                type="submit"
                value="Log In"
                className="btn btn-success btn-sm mx-5"
              />
            </div>
          </form>
          <div className="mt-3 mx-5">
            <span className="row align-items-start mx-2">
              <p className="text-start mx-5 col">
                <Link style={{ textDecoration: "none" }} to="/signup">
                  Signup
                </Link>
              </p>
              <p className="text-end mt-1 col">Forgot Password</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
