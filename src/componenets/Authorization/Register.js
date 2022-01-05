import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerUsers } from "../../store/user-actions";

const initialState = {
  userDetails: {
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  },
};

const Register = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);
  const [checked, setchecked] = useState(false);
  const [checkedConfirmedPassword, setCheckedConfirmedPassword] =
    useState(false);
  const [state, setState] = useState(initialState);

  const {
    userDetails: { name, email, phone, gender, password, confirmPassword },
  } = state;

  const dispatch = useDispatch();

  const SubmitUser = (e) => {
    e.preventDefault();
    dispatch(registerUsers({ userDetails: { ...state.userDetails } }));
    setState(initialState);
  };
  const watchPassword = () => {
    setVisiblePassword(!visiblePassword);
    setchecked(!checked);
  };

  const checkConfirmsPassword = () => {
    setVisibleConfirmPassword(!visibleConfirmPassword);
    setCheckedConfirmedPassword(!checkedConfirmedPassword);
  };
  const style = {
    position: "relative",
    right: "20px",
  };

  const handleUserSubmit = (event) => {
    setState({
      ...state,
      userDetails: {
        ...state.userDetails,
        [event.target.name]: event.target.value,
      },
    });
  };

  return (
    <>
      <div id="signUp" className="container border border-3 my-1 col-10 signUp">
        <div className="mx-3 my-3 border border-2">
          <div className="mt-3">
            <p className="text-center">
              <i
                className="fas fa-user fa-5x  "
                style={{ color: "orange" }}
              ></i>
            </p>
            <p className="text-center fs-2" style={{ color: "gray" }}>
              User Details
            </p>
          </div>
          <form onSubmit={SubmitUser} style={{ marginLeft: "50px" }}>
            <div className="my-2 mx-5 ">
              <p className="mb-1 fw-bold">Name</p>
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleUserSubmit}
                id="name"
                value={name}
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
                name="email"
                value={email}
                onChange={handleUserSubmit}
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
                type="Number"
                placeholder="Phone No"
                name="phone"
                value={phone}
                onChange={handleUserSubmit}
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
              <p className="mb-1 fw-bold">Gender</p>
              <select
                style={{
                  border: "none",
                  borderBottom: "1px solid",
                  outline: 0,
                  width: "90%",
                }}
                onChange={handleUserSubmit}
                name="gender"
                value={gender}
              >
                <option value="gender" hidden>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="my-2 mx-5 ">
              <p className="mb-1 fw-bold">Password</p>
              <div className="input-group mb-3">
                <input
                  type={checked ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={handleUserSubmit}
                  value={password}
                  size={60}
                  className="px-1"
                  style={{
                    border: "none",
                    borderBottom: "1px solid",
                    outline: 0,
                    width: "90%",
                  }}
                />
                <div style={style}>
                  {visiblePassword ? (
                    <i className="fas fa-eye" onClick={watchPassword}></i>
                  ) : (
                    <i className="fas fa-eye-slash" onClick={watchPassword}></i>
                  )}
                </div>
              </div>
            </div>
            <div className="my-2 mx-5 ">
              <p className="mb-1 fw-bold">Confirm Password</p>
              <div className="input-group mb-3">
                <input
                  type={checkedConfirmedPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleUserSubmit}
                  value={confirmPassword}
                  size={60}
                  className="px-1"
                  style={{
                    border: "none",
                    borderBottom: "1px solid",
                    outline: 0,
                    width: "90%",
                  }}
                />
                <div style={style}>
                  {visibleConfirmPassword ? (
                    <i
                      className="fas fa-eye"
                      onClick={checkConfirmsPassword}
                    ></i>
                  ) : (
                    <i
                      className="fas fa-eye-slash"
                      onClick={checkConfirmsPassword}
                    ></i>
                  )}
                </div>
              </div>
            </div>
            <div className="my-4 mx-1 mt-2">
              <span className="mx-5">
                <input type="checkbox" id="check" className="fs-4 mx-1" />
                <label htmlFor="check" style={{ color: "gray" }}>
                  I Accept All The Terms And Contions
                </label>
              </span>
            </div>
            <div className="d-grid gap-2 mx-5 col-10 my-3">
              <input
                type="submit"
                value="Submit"
                className="btn btn-success btn-sm mx-5"
              />
            </div>
          </form>
          <div className="mt-3 mx-5">
            <span className="row align-items-start mx-2">
              <div className="text-end my-1">
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
