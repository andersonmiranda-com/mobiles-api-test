const express = require("express");
var cors = require("cors");
const routes = require("./routes");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
