import {route} from "express";
import { createRol, deleteRol, readRol, updateRol } from "../controllers/rol.controller";

const router= Router();

router.get("/", readRol);

router.post("/", createRol);

router.patch("/:id", updateRol);

router.delete("/:id", deleteRol);   

export default router;