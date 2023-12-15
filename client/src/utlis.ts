import axios from "axios";

export function hasJWT() {
  //check user has JWT token
  let flag = localStorage.getItem("token") ? true : false;
  return flag;
}

export function setAuthToken(token: string) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
