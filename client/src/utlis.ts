import axios from "axios";

export function hasJWT() {
  //check user has JWT token
  let flag = localStorage.getItem("token") ? true : false;
  return flag;
}

export function setAuthToken() {
  // Ideally we should use interceptors but keeping it simple for now
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
