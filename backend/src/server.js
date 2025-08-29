import { clerkMiddleware } from "@clerk/express";
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js"; // database connection
import path from "path";
import fileupload from "express-fileupload"; // for file uploads

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve(); // Get the current directory name

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware()); // this will add auth to req obj
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"), // directory for temporary files
    createParentPath: true, // create parent directories if they don't exist
    limits: { fileSize: 50 * 1024 * 1024 }, // limit file size to 50MB
  })
);

// routes
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import adminRoutes from "./routes/admin.route.js";
import songRoutes from "./routes/song.route.js";
import albumRoutes from "./routes/album.route.js";
import statusRoutes from "./routes/status.route.js";

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/song", songRoutes);
app.use("/api/album", albumRoutes);
app.use("/api/status", statusRoutes);

// error handling middleware
if (PORT === undefined) {
  throw new Error("PORT is not defined");
}
// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message:
      process.env.NODE_ENV === "production" ? "Something broke!" : err.message,
  });
});

//port listen
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
