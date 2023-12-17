# MERN Stack Cart Assignment

This project is a simple cart implemented using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides basic functionality for users to add items to their cart, proceed to checkout, and receive a discount code for every nth order. In this case I have assumed n to be 3, i.e. for every 3rd order discount can be applied. The project also includes admin APIs for generating discount codes and retrieving purchase statistics which can be accessed using admin login in frontend.

## Note

To access the the store you need to login as admin or user.
For User:
username: user
password: user123

For Admin:
username: admin
password: admin123

## Features

1. Add items to the shopping cart and apply discount coupon.
2. Proceed to checkout and receive a discount code for every nth order
3. Admin APIs for generating discount codes and retrieving purchase statistics
4. In-memory store for simplicity (can be extended to use a real database)
5. Login functionality for user and admin.
6. Discount applies to every 3rd order, if the applied discount coupon is valid. Every Coupon can only be used once.
7. Middleware checks for admin and logged in checks.

## Technology Used

1. Express.js: Backend web framework for handling API requests
2. React.js: Frontend library for building user interfaces
3. Node.js: JavaScript runtime for server-side development

## Getting Started

1. Clone the repository

```
git clone https://github.com/your-username/mern-ecommerce.git
cd mern-ecommerce
```

2. Traverse to the client and server folder and install dependencies with the following command.

```
npm install
```

3. Start the client and server with:

```
npm run dev
```

4. FrontEnd will be running at http://localhost:5173 and server at http://localhost:8000

5. Login using admin or user to access the store.

## API Endpoints

1. Login: '/api/auth/login'
2. Add to Cart: '/api/cart/add'
3. Checkout Cart: '/api/cart/checkout'
4. Get Cart: '/api/cart/get-cart'
5. Admin Routes:
   - Get Statistics:'api/cart/admin/stats'
   - Create Discount Code: 'api/cart/create-discount-code'
