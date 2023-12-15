import { useState } from "react";
import CartItems from "./cart-item";

const Cart = ({ cartItems, total }: any) => {
  const [coupon, setCoupon] = useState<string>("");

  const handleCheckout = () => {};

  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <h2>Cart Is Empty</h2>
        </>
      ) : (
        <>
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItems.map((item: any) => (
                <CartItems
                  price={item.price}
                  category={item.category}
                  name={item.name}
                  image={item.image}
                />
              ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">Rs {total}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">Rs 100</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold text-black">
                    Rs {total + 100}
                  </p>
                </div>
              </div>
              <input
                type="Text"
                className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Coupon Code"
                required
              />
              <button
                onClick={handleCheckout}
                className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
              >
                Check out
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
