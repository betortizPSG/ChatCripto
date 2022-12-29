import axios from "axios";
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGOUT_SUCCESS,
  IDLE_USER,
  PROMPT_IDLE,
} from "../types/authType";

export const userRegister = (data) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/josn",
      },
    };
    try {
      const response = await axios.post(
        "/api/messenger/user-register",
        data,
        config
      );
      localStorage.setItem("authToken", response.data.token);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: {
          successMessage: response.data.successMessage,
          token: response.data.token,
        },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: {
          error: error.response.data.error.errorMessage,
        },
      });
    }
  };
};

export const userLogin = (data) => {
  return async (dispath) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "/api/messenger/user-login",
        data,
        config
      );
      localStorage.setItem("authToken", response.data.token);
      dispath({
        type: USER_LOGIN_SUCCESS,
        payload: {
          successMessage: response.data.successMessage,
          token: response.data.token,
        },
      });
    } catch (error) {
      dispath({
        type: USER_LOGIN_FAIL,
        payload: {
          error: error.response.data.error.errorMessage,
        },
      });
    }
  };
};

export const userLogout = () => async (dispatch) => {
  try {
    const response = await axios.post("/api/messenger/user-logout");
    if (response.data.success) {
      localStorage.removeItem("authToken");
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    }
  } catch (error) { }
}


export const userIdle = () => async (dispatch) => {
  try {
    const response = await axios.post("/api/messenger/user-logout");
    if (response.data.success) {
      localStorage.removeItem("authToken");
      dispatch({
        type: IDLE_USER,
      });
    }
  } catch (error) { }
};

export const promptIdle = () => async (dispatch) => {
  try {
    const response = await axios.post("/api/messenger/user-login")
    if (response.data.success) {
      dispatch({
        type: PROMPT_IDLE,
      });
    }
  } catch (error) { }

}