import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../axios";

const Navbar = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState<string | null>("");

  useEffect(() => {
    if (document !== undefined) {
      const role = localStorage.getItem("role");
      setRole(role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  async function handleCreateDiscount() {
    try {
      const response = await API.get("api/admin/create-discount-code");
      toast.info(`Dicount Coupon Created: ${response?.data?.code}`);
    } catch (error) {
      console.log(error);
      toast.error("Error in creating discount code");
    }
  }

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Online Store
        </span>
        <div className="flex md:order-2 space-x-5 md:space-x-5 rtl:space-x-reverse">
          {role === "admin" ? (
            <>
              <button
                onClick={handleCreateDiscount}
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create Discount Code
              </button>
              <a href="/discount-list">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cart Info
                </button>
              </a>
            </>
          ) : (
            <></>
          )}
          <button
            onClick={handleLogout}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
