import {Router} from "express";
import { createLugar, deleteLugar, readLugar, updateLugar } from "../controllers/lugar.controller.js";
const router= Router();
router.get("/", readLugar);

router.post("/", createLugar);

router.put("/:id", updateLugar);

router.delete("/:id", deleteLugar);   

export default router;