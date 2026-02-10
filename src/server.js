import "dotenv/config";
import app from "./app.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 3001;

connectDB()
<<<<<<< HEAD
  .then(() => app.listen(port, () => console.log(`API running on :${port}`)))
=======
  .then(() => {
    app.listen(port, () => console.log(`API on :${port}`));
  })
>>>>>>> 7099a4f (Auth, user management and JWT security implemented)
  .catch((e) => {
    console.error("DB connection failed:", e);
    process.exit(1);
  });
