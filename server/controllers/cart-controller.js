import { cartItems, discountCodes, orderCount } from '../data.js';
import {
  calculateTotalAmount,
  generateDiscountCode,
  validateDiscountCode,
} from '../utils.js';

//* Add Items to cart
export const addItemsToCart = (req, res) => {
  const { item } = req.body;
  cartItems.push(item);
  res.status(200).json({
    success: true,
    items: cartItems,
    message: 'Items added to cart successfully',
  });
};

//* Checkout the current order with discount coupon check
export const checkOut = (req, res) => {
  const { discountCode } = req.body;

  // Check if cart is empty
  if (cartItems.length === 0) {
    return res
      .status(400)
      .json({ message: 'Cart is Empty, please add items before checking out' });
  }

  orderCount++;
  const totalAmount = calculateTotalAmount(cartItems);

  // If no discount code is applied, checkout normally and create an order
  if (discountCode === null) {
    const newOrder = {
      items: cartItems,
      totalAmount,
      discountCode: null,
    };
    return res.status(200).json({
      message: 'Order Created Successfully',
      success: true,
      order: newOrder,
    });
  }

  const discountCodeValid = validateDiscountCode(discountCode);

  // for every 3rd order check if coupon code is valid
  if (orderCount % 3 === 0 && !discountCodeValid) {
    // Decrease order count as order wasnt created
    orderCount--;
    return res.status(404).json({
      message: 'Coupon Code not valid or already used',
      success: false,
    });
  }
  // If all checks are passed create order with discount
  const newOrder = {
    items: cartItems,
    totalAmount: totalAmount - totalAmount * 0.1,
    discountCode,
  };
  // reset the cart
  cartItems = [];
  return res.status(200).json({
    message: 'Order Created Successfully and discount code applied',
    success: true,
    order: newOrder,
  });
};

//* Return info related to orders
export const getStats = (req, res) => {
  return res.status(200).json({
    itemCount: cartItems.length,
    orderCount,
    totalAmount: calculateTotalAmount(cartItems),
    discountCodes,
    totalDiscountAmount: totalAmount * 0.1,
  });
};

//* Create Discount code
export const createDiscountCode = () => {};
