import jwt from 'jsonwebtoken';
import { SECRET } from '../data.js';

export const userAuthenticated = (req, res, next) => {
  const token = req.headers['authorization'];
  const decodedData = jwt.verify(token, SECRET);
  if (!decodedData) {
    res.status(200).json({ message: 'Invalid of expired token' });
  }
  next();
};

export const isAdmin = (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    const decodedData = jwt.verify(token, SECRET);
    if (decodedData?.role !== 'admin') {
      return res
        .status(200)
        .json({ message: 'You dont have access to this resource' });
    }
    next();
  } catch (error) {
    res.status(200).json({ message: 'Invalid of expired token' });
  }
};
