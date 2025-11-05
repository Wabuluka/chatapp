import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Serve index.html for all other routes (client-side routing)
  app.get(":all", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
  });
}
const PORT = ENV.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: `, PORT);
  connectDB();
});
