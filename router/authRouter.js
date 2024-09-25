import express from 'express';
import {
  RegisterUser,
  LoginUser,
  LogoutUser,
  GetUser,
} from '../controllers/authController.js';

const router = express.Router();

// post /api/api/v1/auth/register
router.post('/register', RegisterUser);

// post /api/api/v1/auth/login
router.post('/login', LoginUser);

// get /api/api/v1/auth/logout
router.get('/logout', LogoutUser);

// get /api/api/v1/auth/getuser
router.get('/getUser', GetUser);

export default router;
