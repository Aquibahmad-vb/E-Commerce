import axios from "axios";

const baseUrl = `http://localhost:3000`;

export const registerUsers = (userValue) => {
  console.log(userValue.userDetails, "userValue");
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
      const userData = await RegistUser();
    } catch (error) {
      console.log(error.message);
    }
  };
};
