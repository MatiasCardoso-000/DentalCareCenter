import express from "express";
import {
  getProfile,
  login,
  logout,
  register,
} from "../controllers/auth.controller";
import { authRequired } from "../middleware/validateToken";
import { validateSchema } from "../middleware/validator.middleware";
import { registerSchema, loginSchema } from "../schemas/auth.schema";

export const router = express.Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, getProfile);
