import Axios from 'axios'
import { API } from "../../backend";

export const login = async (user) => {
  const { data } = await Axios.post(`${API}/user/login`, user);
  const { token } = data;
  if (!!data.token && typeof window !== "undefined") {
    authenticate(token);
    window.location.href = "/";
  }
  return data.message
};

export const SignUphelper = (user) => {
  // const userResponse = Axios.post(`${API}/user/signUp`, user)
  // console.log({userResponse});
};

const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(data));
  }
};

export const signout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
  window.location.reload();
};

export const isAutheticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("user")) {
    return localStorage.getItem("user");
  } else {
    return false;
  }
};
