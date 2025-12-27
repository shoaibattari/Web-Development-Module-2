import express from "express";
import routes from "./routes/productsRoutes.js";
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(routes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
