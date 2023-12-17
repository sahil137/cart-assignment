import { useEffect, useState } from "react";
import { dummyShoppingItems } from "../dummy-data";
import Cart from "./cart";
import Navbar from "../components/header";
import ShopItem from "../components/shop-item";
import { toast } from "react-toastify";
import { addItemToCart, checkout, getCart } from "../axios";

function HomePage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [discountCode, setDiscountCode] = useState("");

  async function getCartItems() {
    const response = await getCart();
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
    let flag = false;
    if (flag) return;
    let total = price;
    cartItems.forEach((item) => {
      total += item.price;
    });
    setCartTotal(total);
    getCartItems();
    toast.info(response?.data?.message);
  }

  const handleCheckout = async () => {
    try {
      const response = await checkout(discountCode);
      console.log(response);
      toast.success(response?.data?.message);
      setDiscountCode("");
      getCartItems();
    } catch (error: any) {
      console.log(error);
      toast.error(error?.response?.data?.message);
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
