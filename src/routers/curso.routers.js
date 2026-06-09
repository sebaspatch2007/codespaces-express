import {Router} from "express";
import { createCurso, updateCurso, deleteCurso, readCurso } from "../controllers/curso.controller.js";
const router= Router();
router.get("/",  readCurso);

router.post("/", createCurso);

router.put("/:id", updateCurso);

router.delete("/:id", deleteCurso);

export default router;