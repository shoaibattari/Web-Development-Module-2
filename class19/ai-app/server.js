import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./routes/open.js";
import connectDB from "./config/db.js";

const app = express();
const port = process.env.PORT;
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
