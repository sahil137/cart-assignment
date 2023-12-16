import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  // adding token to each request so that the backend can verify if the user is logged in

  if (localStorage.getItem("token")) {
    req.headers.authorization = `${localStorage.getItem("token") || ""}`;
  }

  return req;
});

export const login = (form: any) => API.post("/api/auth/login", form);
export const getCart = () => API.get("/api/cart/get-cart");
export const checkout = (discount: string) =>
  API.post("/api/cart/checkout", discount);
export const addItemToCart = (cartData: any) =>
  API.post("/api/cart/add", cartData);

export const getDiscountCouponCodes = () => API.get("/api/admin/stats");

export default API;
