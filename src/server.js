const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    data: {
      mensagem: "API Connect funcionando com sucesso!"
    }
  });
});

app.use("/users", userRoutes);

app.use((req, res) => {
  return res.status(404).json({
    error: "Rota não encontrada."
  });
});

app.listen(PORT, () => {
  console.log("-----------------------------------------");
  console.log("API Connect iniciada com sucesso!");
  console.log(`Servidor: http://localhost:${PORT}`);
  console.log("-----------------------------------------");
});