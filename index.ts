import connectToMongoDB from "./helpers/db";
import postRoutes from "./routes/posts";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

connectToMongoDB();

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => res.json({ message: "Hello World!" }));

app.use("/posts", postRoutes);

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
