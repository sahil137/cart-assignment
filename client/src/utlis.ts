export function hasJWT() {
  //check user has JWT token
  let flag = localStorage.getItem("token") ? true : false;
  return flag;
}
