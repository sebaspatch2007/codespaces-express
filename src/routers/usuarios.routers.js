import { Router } from "express";
import { createUsuarios, updateUsuarios, deleteUsuarios, readUsuarios } from "../controllers/usuarios.controller";
const router= Router();

router.post("/", createUsuarios)
router.get("/", readUsuarios)
router.put("/:id", updateUsuarios)
router.delete("/:id", deleteUsuarios)

export default router;