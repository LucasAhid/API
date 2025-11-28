const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const orderRoutes = require("./routes/orderRoutes");
app.use("/", orderRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("API rodando na porta " + port));
