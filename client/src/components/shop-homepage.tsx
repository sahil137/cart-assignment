import { useState } from "react";
import { dummyShoppingItems } from "../dummy-data";
import Cart from "./cart";
import Navbar from "./header";
import ShopItem from "./shop-item";
import { toast } from "react-toastify";

function HomePage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);

  function handleAddToCart(image: string, name: string, price: number) {
    let flag = false;
    cartItems.forEach((item) => {
      if (item?.name === name) {
        toast.info("Item Already added");
        flag = true;
      }
    });
    if (flag) return;
    let total = price;
    cartItems.forEach((item) => {
      total += item.price;
    });
    setCartItems((prev) => [...prev, { name, image, price }]);
    setCartTotal(total);
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 gap-3 mt-10 mb-24">
        {dummyShoppingItems.map((item, idx) => (
          <ShopItem
            category={item.category}
            image={item.image}
            name={item.name}
            price={item.price}
            key={idx}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Cart cartItems={cartItems} total={cartTotal} />
    </>
  );
}

export default HomePage;
