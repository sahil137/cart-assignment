import { dummyShoppingItems } from "../dummy-data";
import Navbar from "./header";
import ShopItem from "./shop-item";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 gap-3 mt-10">
        {dummyShoppingItems.map((item, idx) => (
          <ShopItem
            category={item.category}
            image={item.image}
            name={item.name}
            price={item.price}
            key={idx}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
