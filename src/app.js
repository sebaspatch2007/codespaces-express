import express from "express"
import curso from "./routers/curso.routers.js"
import grado from "./routers/grado.routers.js"
import usuario from "./routers/usuarios.routers.js"
const app = new express

app.use("/", (req, res)=>{
    res.send("hola")
})
app.use("/curso", curso)
app.use("/grado", grado)
app.use("/usuario", usuario)


export default app