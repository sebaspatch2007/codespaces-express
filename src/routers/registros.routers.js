import {Router} from "express";
import { findUsers, createUsers, updateUsers, deleteUsers } from "../controllers/usuarios.controller.js";
const router= Router

router.get("/", findUsers)

router.post("/", createUsers)

router.patch("/", updateUsers)

router.delete("/", deleteUsers)

export default router;
