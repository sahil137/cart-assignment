interface ShopItemProps {
  category: string;
  name: string;
  price: number;
  image: string;
  handleAddToCart: (image: string, name: string, price: number) => void;
}

const ShopItem = ({ image, name, price, handleAddToCart }: ShopItemProps) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={image} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Rs {price}
          </span>
          <div
            onClick={() => handleAddToCart(image, name, price)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
          >
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
