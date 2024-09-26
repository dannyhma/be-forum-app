import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authMiddleware = async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  if (!token) {
    return next(
      res.status(401).json({
        message: "You can't access this page",
      })
    );
  }

  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return next(
      res.status(401).json({
        message: 'The token entered is incorrect or does not exist',
      })
    );
  }

  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      res.status(401).json({
        message: 'User not found or deleted',
      })
    );
  }

  req.user = currentUser;
  next();
};

export const permissonUser = (...roles) => {
  return (req, res, next) => {
    // ["admin", "user", "moderator"]
    if (!roles.includes(req.user.role)) {
      return next(
        res.status(403).json({
          message: 'You do not have permission to perform this action',
        })
      );
    }

    next();
  };
};
