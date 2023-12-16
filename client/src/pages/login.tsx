import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../axios";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      if (username === "" || password === "") {
        toast.error("Invalid username or password");
        return;
      }
      //* Make API call to login using axios helper function and get access token
      const res = await login({
        username,
        password,
      });
      console.log(res);

      //* Set JWT token in localStorage along with the role of user
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("role", res.data.role);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-y-5">
      <h2 className="text-2xl text-white">Login to access the store</h2>
      <form className="border border-gray-600 shadow-2xl w-[400px] h-[400px] flex flex-col justify-center items-center rounded-xl">
        <div className="mb-6 w-5/6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="email"
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="abcd1234"
            required
          />
        </div>
        <div className="mb-6 w-5/6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="bg-gray-50 border border-gray-300 text-bl text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
        <button
          onClick={handleLogin}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
