import express from "express";
import usuario from "./routers/usuarios.routers.js";
const app = express();

app.use(express.json());
app.use("/usuario", usuario);
app.get("/", (req, res) => {
  res.send("hola....");
});

export default app;
