interface CartItemsProps {
  category: string;
  name: string;
  price: number;
  image: string;
}

const CartItems = ({ category, image, name, price }: CartItemsProps) => {
  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <img
        src={image}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="font-bold text-gray-900">{name}</h2>
          <p className="mt-1 text-xs text-gray-700">{category}</p>
        </div>
        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center space-x-4">
            <p className="text-sm text-black">Rs {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
