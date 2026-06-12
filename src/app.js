import express from "express";
import usuario from "./routers/usuarios.routers.js";
import tipo_documento from "./routers/tipo_documento.routers.js";
import rol from "./routers/rol.routers.js";
import registro from "./routers/registros.routers.js";
import lugar from "./routers/lugar.routers.js";
import jornada from "./routers/jornada.routers.js";
import curso from "./routers/curso.routers.js";
import grado from "./routers/grado.routers.js"


const app = express();

app.use(express.json());
app.use("/usuario", usuario);
app.use("/tipo_documento", tipo_documento);
app.use("/rol", rol);
app.use("/registro", registro);
app.use("/lugar", lugar);
app.use("/jornada", jornada);
app.use("/grado", grado);
app.use("/curso", curso);

app.get("/", (req, res) => {
  res.send("hola....");
});

export default app;
