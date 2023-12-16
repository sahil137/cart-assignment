import { useEffect, useState } from "react";
import { getDiscountCouponCodes } from "../axios";

const CartInfo = () => {
  const [cartData, setCartData] = useState<any>(null);
  useEffect(() => {
    async function getDiscountList() {
      const data = await getDiscountCouponCodes();
      console.log(data);
      setCartData(data?.data);
    }
    getDiscountList();
  }, []);
  return (
    <>
      <div className="text-left text-xl font-bold my-5">Discount Codes</div>
      <div className="flex flex-col gap-y-5">
        {cartData?.discountCodes?.map((item: any) => (
          <div key={item?.code} className="flex h-8 space-x-10">
            <div>{item?.code}</div>
            <div>{item?.codeUsed ? "Used" : "Not Used"}</div>
          </div>
        ))}
      </div>
      <div className="text-left text-xl font-bold my-5">
        Cart Item Count: {cartData?.itemCount}
      </div>
      <div className="text-left text-xl font-bold my-5">
        Total Cart Amount: {cartData?.totalAmount}
      </div>
      <div className="text-left text-xl font-bold my-5">
        Total Discount Amount:{" "}
        {parseFloat(cartData?.totalDiscountAmount).toFixed(2)}
      </div>
    </>
  );
};

export default CartInfo;
