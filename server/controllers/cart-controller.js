import {
  applyDiscountCode,
  calculateTotalAmount,
  generateDiscountCode,
  validateDiscountCode,
} from '../utils.js';

// Cart Data
let orderCount = 0;
let cartItems = [];
let discountCodes = [];

//* Add Items to cart
export const addItemsToCart = (req, res) => {
  for (let i = 0; i < cartItems.length; i++) {
    if (req.body.name === cartItems[i].name) {
      return res.json(400).message('Item Already Added');
    }
  }
  // Push curr item into in memory cart
  cartItems.push(req.body);
  res.status(200).json({
    success: true,
    items: cartItems,
    message: 'Items added to cart successfully',
  });
};

//* get cart
export const getCart = (req, res) => {
  return res.status(200).json({ cart: cartItems });
};

//* Checkout function with discount coupon checks
export const checkOut = (req, res) => {
  let { discountCode } = req.body;

  // Check if cart is empty
  if (cartItems.length === 0) {
    return res
      .status(400)
      .json({ message: 'Cart is Empty, please add items before checking out' });
  }

  // increase Order Count
  orderCount = orderCount + 1;
  let totalAmount = calculateTotalAmount(cartItems);

  if (discountCode === null) {
    // reset cart
    cartItems.splice(0, cartItems.length);
    return res.status(200).json({
      message: 'Order Created with no discount code',
      order: {
        items: cartItems,
        total: totalAmount + 100,
        discount: null,
      },
    });
  }

  let discountCodeValid = validateDiscountCode(discountCode, discountCodes);

  // for every 3rd order check if coupon code is valid
  if (orderCount % 3 === 0 && discountCodeValid) {
    // reset cart
    cartItems.splice(0, cartItems.length);

    return res.status(200).json({
      message: 'Order Created Successfully and discount code applied',
      success: true,
      order: {
        items: cartItems,
        // decrease totalAmount by 10% and shipping fee
        totalAmount: totalAmount - totalAmount * 0.1 + 100,
        // apply discount code and mark it as used
        discount: applyDiscountCode(discountCode, discountCodes),
      },
      orderCount,
    });
  } else if (orderCount % 3 === 0 && !discountCodeValid) {
    // Decrease order count as order wasnt created
    orderCount = orderCount - 1;
    return res.status(404).json({
      message: 'Coupon Code not valid or already used',
      success: false,
    });
  }

  // If no discount code is applied or it is not the 3rd order, checkout normally and create an order
  let newOrder = {
    items: cartItems,
    totalAmount,
    discount: null,
  };
  // reset the cart
  cartItems.splice(0, cartItems.length);
  return res.status(200).json({
    message: 'Order Created Successfully, without discount code',
    success: true,
    order: newOrder,
  });
};

//* Return info related to orders
export const getStats = (req, res) => {
  const totalAmount = calculateTotalAmount(cartItems);
  return res.status(200).json({
    itemCount: cartItems.length,
    orderCount,
    totalAmount,
    discountCodes,
    totalDiscountAmount: totalAmount * 0.1,
  });
};

//* Create Discount code
export const createDiscountCode = (req, res) => {
  const discount = generateDiscountCode(discountCodes);
  return res
    .status(200)
    .json({ message: 'Discount Code Created Successfully', code: discount });
};
