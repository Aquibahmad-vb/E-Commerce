import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [checked, setchecked] = useState(false);
  const [checkedConfirmedPassword, setCheckedConfirmedPassword] =
    useState(false);

  const check = (e) => {
    e.preventDefault();
    alert("hello");
  };
  const watchPassword = () => {
    setVisiblePassword(!visiblePassword);
    setchecked(!checked);
  };

  const confirmPassword = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
    setCheckedConfirmedPassword(!checkedConfirmedPassword);
  };
  return (
    <>
      <div id="login" className="container border border-3 my-5 col-10 login">
        <div className="mx-3 my-3 border border-2">
          <div className="mt-3">
            <p className="text-center">
              <i
                className="fas fa-user fa-5x  "
                style={{ color: "orange" }}
              ></i>
              <p className="text-center fs-2" style={{ color: "gray" }}>
                User Details
              </p>
            </p>
          </div>
          <form onSubmit={check} style={{ marginLeft: "50px" }}>
            <div className="my-2 mx-5 ">
              <p className="mb-1 fw-bold">Name</p>
              <input
                type="text"
                placeholder="Name"
                id="name"
                minLength={5}
                size={60}
                style={{
                  border: "none",
                  borderBottom: "1px solid",
                  outline: 0,
                  width: "90%",
                }}
              />
            </div>
            <div className="my-2 mx-5 ">
              <p className="mb-1 fw-bold ">E-Mail</p>
              <input
                type="text"
                placeholder="E-mail"
                id="email"
                minLength={5}
                size={60}
                className="px-1"
                style={{
                  border: "none",
                  borderBottom: "1px solid",
                  outline: 0,
                  width: "90%",
                }}
              />
            </div>
            <div className="my-2 mx-5 ">
              <p className="mb-1 fw-bold">Phone No</p>
              <input
                type="text"
                maxlength="10"
                placeholder="Phone No"
                id="phoneno"
                size={60}
                className="px-1"
                style={{
                  border: "none",
                  borderBottom: "1px solid",
                  outline: 0,
                  width: "90%",
                }}
              />
            </div>
            <div className="my-2 mx-5 ">
              <p className="mb-1 fw-bold">Password</p>
              <input
                type={checked ? "text" : "password"}
                placeholder="Password"
                id="password"
                size={60}
                className="px-1"
                style={{
                  border: "none",
                  borderBottom: "1px solid",
                  outline: 0,
                  width: "90%",
                }}
              />
              {visiblePassword ? (
                <i class="fas fa-eye" onClick={watchPassword}></i>
              ) : (
                <i class="fas fa-eye-slash" onClick={watchPassword}></i>
              )}
            </div>
            <div className="my-2 mx-5 ">
              <p className="mb-1 fw-bold">Confirm Password</p>
              <input
                type={checkedConfirmedPassword ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirmpassword"
                size={60}
                className="px-1"
                style={{
                  border: "none",
                  borderBottom: "1px solid",
                  outline: 0,
                  width: "90%",
                }}
              />
              {visibleConfirmPassword ? (
                <i class="fas fa-eye" onClick={confirmPassword}></i>
              ) : (
                <i class="fas fa-eye-slash" onClick={confirmPassword}></i>
              )}
            </div>
            <div className="my-4 mx-1 mt-2">
              <span className="mx-5">
                <input type="checkbox" id="check" className="fs-4 mx-1" />
                <label for="check" style={{ color: "gray" }}>
                  I Accept All The Terms And Contions
                </label>
              </span>
            </div>
            <div class="d-grid gap-2 mx-5 col-10 my-3">
              <input
                type="submit"
                value="Submit"
                className="btn btn-success btn-sm mx-5"
              />
            </div>
          </form>
          <div className="mt-3 mx-5">
            <span className="row align-items-start mx-2">
              <div className="text-end my-3">
                have an account?{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Login
                </Link>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
