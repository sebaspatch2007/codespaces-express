import { createRolService, deleteRolService, readRolService, updateRolService } from "../services/rol.service";

export const createRol = async (req, res) => {
    try{
        const user = await createRolService(req.body);
        res.status(201).json(user);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const readRol = async () => {
    try {
        const user = await readRolService();
        res.status(200).json(user);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const updateRol = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const rol = await updateRolService(id, req.body);
        res.status(200).json(rol);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const deleteRol = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const rol = await deleteRolService(id);
        res.status(200).json({message: "Rol eliminado"});
    }catch(e){
        res.status(400).json({error: e.message});
    }  
}