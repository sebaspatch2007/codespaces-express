import {Router} from "express";
import { readTipoDocumento, createTipoDocumento, updateTipoDocumento, deleteTipoDocumento } from "../controllers/tipo_documento.controller.js";
const router = Router();

router.get("/", readTipoDocumento);

router.post("/", createTipoDocumento);

router.patch("/:id", updateTipoDocumento);

router.delete("/:id", deleteTipoDocumento);

export default router;