import { Navigate, Outlet } from "react-router-dom";
import { hasJWT } from "../utlis";

const PrivateRoute = () => {
  return hasJWT() ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
