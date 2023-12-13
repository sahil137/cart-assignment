import { discountCodes } from './data.js';

export function calculateTotalAmount(cartItems) {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return total;
}

//* Creates a random coupon code
export function generateDiscountCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789';
  let code = '';

  //* Generating a random 4 letter code with the above characters
  for (let i = 0; i < 5; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    code += chars.charAt(idx);
  }
  const codeData = {
    code,
    codeUsed: false,
  };
  discountCodes.push(codeData);
  return code;
}

// Check if the code is valid or if it has been used before
export function validateDiscountCode(code) {
  for (let i = 0; i < discountCodes.length; i++) {
    const currCode = discountCodes[i];
    if (currCode.code === code && !currCode.codeUsed) {
      currCode.codeUsed = true;
      return true;
    }
  }
  return false;
}
