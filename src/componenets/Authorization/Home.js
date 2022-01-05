import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const { loginUser } = useSelector((state) => state.user);

  console.log(loginUser, "valuessssssssssssssssssssssssssssss");
  return (
    <>
      {loginUser.data ? (
        <h1>{`hello ${
          loginUser.data ? loginUser.data.data.name : "----"
        } to welcome page`}</h1>
      ) : (
        <h1>Invalid Credentials</h1>
      )}
    </>
  );
};

export default Home;
