import { useEffect, useState } from "react";
import { dummyShoppingItems } from "../dummy-data";
import Cart from "./cart";
import Navbar from "../components/header";
import ShopItem from "../components/shop-item";
import { toast } from "react-toastify";
import API, { addItemToCart, checkout, getCart } from "../axios";

function HomePage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [discountCode, setDiscountCode] = useState("");

  async function getCartItems() {
    const response = await getCart();
    console.log(response);
    setCartItems(response?.data?.cart);
    let flag = false;
    cartItems.forEach((item) => {
      if (item?.name === name) {
        toast.info("Item Already added");
        flag = true;
      }
    });
    if (flag) return;
    let total = 0;
    response?.data?.cart?.forEach((item: any) => {
      total += item.price;
    });
    setCartTotal(total);
  }
  useEffect(() => {
    getCartItems();
  }, []);

  async function handleAddToCart(image: string, name: string, price: number) {
    // Check if it is already added
    cartItems.forEach((item) => {
      if (item?.name === name) {
        toast.info("Item Already added");
        flag = true;
      }
    });
    // API call to add item to cart
    const response = await addItemToCart({
      image,
      name,
      price,
    });
    console.log(response);
    let flag = false;
    if (flag) return;
    let total = price;
    cartItems.forEach((item) => {
      total += item.price;
    });
    setCartTotal(total);
    getCartItems();
  }

  const handleCheckout = async () => {
    try {
      const response = await checkout(discountCode);
      console.log(response);
    } catch (error) {
      console.log(error);
      toast.error("Error in checking out");
    }
  };

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
      <Cart
        cartItems={cartItems}
        total={cartTotal}
        handleCheckout={handleCheckout}
        setDiscountCode={setDiscountCode}
        discountCode={discountCode}
      />
    </>
  );
}

export default HomePage;
