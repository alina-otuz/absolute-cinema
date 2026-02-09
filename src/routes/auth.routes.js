import { Router } from "express";
import Joi from "joi";
import { validate } from "../middleware/validate.js";
import { register, login } from "../controllers/auth.controller.js";

const router = Router();

const registerSchema = Joi.object({
  username: Joi.string().min(2).max(40).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(72).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(72).required()
});

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;
