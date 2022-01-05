import axios from "axios";
import { userAction } from "./user-slice";

const baseUrl = `http://localhost:3000`;

export const registerUsers = (userValue) => {
  return async (dispatch) => {
    const RegistUser = async () => {
      const response = await axios.post(
        `${baseUrl}/register`,
        userValue.userDetails
      );
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      await RegistUser();
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const loginUser = (userValue) => {
  return async (dispatch) => {
    const loginUser = async () => {
      const response = await axios.post(
        `${baseUrl}/login`,
        userValue.loginDetails
      );
      if (response.status === "failure") {
        throw new Error(response.data.message);
      }
      return response;
    };
    try {
      const loginUsers = await loginUser();
      dispatch(userAction.userLogin(loginUsers));
    } catch (error) {
      console.log(error.message);
    }
  };
};
