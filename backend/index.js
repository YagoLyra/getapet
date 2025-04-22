const express = require("express");
const cors = require("cors");

const app = express();

//Config JSON response
app.use(express.json());

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Public folder for images
app.use(express.static("public"));

// Routes
const UserRoutes = require("./routes/userRoutes");
const PetRoutes = require("./routes/petRoutes");

app.use("/users", UserRoutes);
app.use("/pets", PetRoutes);

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
