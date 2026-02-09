import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());
app.use(express.json());

app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(",") || "*",
  credentials: true,
}));

app.use(morgan("dev"));

app.use("/api", rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));
app.use("/api/auth", rateLimit({ windowMs: 15 * 60 * 1000, max: 20 })); // brute-force guard

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use((req, res) => res.status(404).json({ message: "Not found" }));
app.use(errorHandler);

export default app;
