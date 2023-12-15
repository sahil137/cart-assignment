import { SECRET, users } from '../data.js';

import jwt from 'jsonwebtoken';

export const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Enter valid username or password' });
  }

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const payload = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  const token = jwt.sign(payload, SECRET, { expiresIn: '2h' });
  res.status(200).json({
    accessToken: token,
    message: 'Logged in successfully',
    role: user.role,
  });
};
