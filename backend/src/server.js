import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
dotenv.config();
const app = express();

app.use(express.json());

const __dirname = path.resolve();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Serve index.html for all other routes (client-side routing)
  app.get(":all", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist/index.html"));
  });
}
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: `, PORT);
  connectDB();
});
