import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import showtimeRoutes from "./routes/showtime.routes.js";
import bookingRoutes from "./routes/booking.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

// Security baseline
app.use(helmet());

// Global rate limit (general protection)
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

// Route-specific limits (stricter where needed)
app.use("/api", rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));
app.use("/api/auth", rateLimit({ windowMs: 15 * 60 * 1000, max: 20 }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/showtimes", showtimeRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/reviews", reviewRoutes);

// 404 after routes
app.use((req, res) => res.status(404).json({ message: "Not found" }));

// Error handler last
app.use(errorHandler);

export default app;
