import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 3001;

connectDB()
  .then(() => app.listen(port, () => console.log(`API running on :${port}`)))
  .catch((e) => {
    console.error("DB connection failed:", e);
    process.exit(1);
  });
