// * Data related to Cart and discounts is stored here (ideally this should be in a DB)
export let cartItems = [];
export let discountCodes = [];
export let orderCount = 0;
//* Fake users for this project
export const users = [
  { id: 1, username: 'user', password: 'user123', role: 'user' },
  { id: 2, username: 'admin', password: 'admin123', role: 'admin' },
];
//* JWT Secret
export const SECRET = 'thisisveryimportantsecretforthisproject';
