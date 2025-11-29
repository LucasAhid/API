const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const orderRoutes = require("./routes/orderRoutes");
app.use("/", orderRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/", authRoutes);

const { swaggerUi, swaggerSpec } = require("./swagger");
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
  res.status(204).send(); // retorna sem conteúdo, sem erro
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("API rodando na porta " + port));
