import express from 'express'
import { getProfile, login, logout, register } from '../controllers/auth.controller';
import { authRequired } from '../middlewares/validateToken';


export const router = express.Router();

router.post("/register",register);

router.post("/login", login);

router.post('/logout', logout)

router.get('/profile', authRequired, getProfile);