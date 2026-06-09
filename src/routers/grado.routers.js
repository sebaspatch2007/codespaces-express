import {Router} from "express";
import { createGrado, updateGrado, deleteGrado, readGrado } from "../controllers/grado.controller.js";
const router= Router();
router.get("/", readGrado);

router.post("/", createGrado);

router.put("/:id", updateGrado);

router.delete("/:id", deleteGrado);

export default router; 

