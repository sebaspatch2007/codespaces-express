import {Router} from "express";
import { createRegistros, deleteRegistros, readRegistros, updateRegistros } from "../controllers/registros.controller";
const router= Router();

router.get("/", readRegistros);

router.post("/", createRegistros);

router.put("/:id", updateRegistros);

router.delete("/:id", deleteRegistros);   

export default router;
