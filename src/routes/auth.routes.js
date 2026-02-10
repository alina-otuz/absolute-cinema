import { Router } from "express";
<<<<<<< HEAD
import { register, login, refresh } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { registerSchema, loginSchema, refreshSchema } from "../validation/auth.schemas.js";
=======
import Joi from "joi";
import { validate } from "../middleware/validate.middleware.js";
import { register, login } from "../controllers/auth.controller.js";
>>>>>>> 7099a4f (Auth, user management and JWT security implemented)

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/refresh", validate(refreshSchema), refresh);

export default router;
