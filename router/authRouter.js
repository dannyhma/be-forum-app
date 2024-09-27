import express from 'express';
import {
  RegisterUser,
  LoginUser,
  LogoutUser,
  GetUser,
} from '../controllers/authController.js';
import { authMiddleware, permissonUser } from '../middleware/authMiddleware.js';

const router = express.Router();

// post /api/v1/auth/register
router.post('/register', RegisterUser);

// post /api/v1/auth/login
router.post('/login', LoginUser);

// get /api/v1/auth/logout
router.get('/logout', LogoutUser);

// get /api/v1/auth/getuser
router.get('/getUser', authMiddleware, GetUser);

// get /api/v1/auth/test
router.get('/test', authMiddleware, permissonUser('admin'), (req, res) => {
  res.status(200).json({ message: 'Test success' });
});

export default router;
