import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 3001;

connectDB()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`API running on :${port}`);
    });
  })
  .catch((e) => {
    console.error("DB connection failed:", e);
    process.exit(1);
  });
