import express from "express"
import usuarios from "./src/routers/usuarios.routers.js"
const app = express()
const port = 3000


app.use("/", usuarios)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
