import {Router} from "express";
import { createJornada, updateJornada, deleteJornada, readJornada } from "../controllers/jornada.controller.js";
const router= Router();  
router.get("/", readJornada);

router.post("/", createJornada);

router.put("/:id", updateJornada);

router.delete("/:id", deleteJornada);

export default router;