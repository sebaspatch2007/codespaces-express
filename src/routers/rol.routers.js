import {Router} from "express";
import { createRol, deleteRol, readRol, updateRol } from "../controllers/rol.controller.js";

const router= Router();

router.get("/", readRol);

router.post("/", createRol);

router.put("/:id", updateRol);

router.delete("/:id", deleteRol);   

export default router;