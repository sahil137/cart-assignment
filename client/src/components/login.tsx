const Login = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center gap-y-5">
      <h2 className="text-2xl text-white">Login</h2>
      <form
        action=""
        className="border border-gray-600 shadow-2xl w-[400px] h-[400px] flex flex-col justify-center items-center rounded-xl"
      >
        <div className="mb-6 w-5/6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="abcd1234"
            required
          />
        </div>
        <div className="mb-6 w-5/6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
