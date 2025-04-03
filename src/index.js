import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailRoutes from "./routes/emailRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(express.json());
app.use(cors());


app.use("/api", emailRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})