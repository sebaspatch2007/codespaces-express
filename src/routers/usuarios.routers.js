import { Router } from "express";
import { controllerfindUsuarios, createUsuarios, updateUsuarios, deleteUsuarios } from "../controllers/usuarios.controller";
const router= Router();

router.post("/", createUsuarios)
router.get("/", controllerfindUsuarios)
router.put("/:id", updateUsuarios)
router.delete("/:id", deleteUsuarios)

export default router;