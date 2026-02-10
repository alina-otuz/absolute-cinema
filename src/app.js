import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

<<<<<<< HEAD
app.use(helmet());
app.use(express.json());

app.use(cors({ origin: process.env.CORS_ORIGIN || "*", credentials: true }));
=======
// Security baseline
app.use(helmet());

// Basic rate limit (просто и эффективно)
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
    credentials: true
  })
);
>>>>>>> 7099a4f (Auth, user management and JWT security implemented)

app.use("/api", rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));
app.use("/api/auth", rateLimit({ windowMs: 15 * 60 * 1000, max: 20 }));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// 404
app.use((req, res) => res.status(404).json({ message: "Not found" }));

// Global error handler
app.use(errorHandler);

export default app;
