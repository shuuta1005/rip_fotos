import express from "express";
import bodyParser from "body-parser";
import env from "dotenv";

const app = express();
const port = 3001;
env.config();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to the Surf Photo Platform API");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost${port}:`);
});
