import { createLugarService,deleteLugarService,readLugarService,updateLugarService } from "../services/lugar.service"
export const createLugar = async (req, res) => {
    try{
        const lugar = await createLugarService(req.body);
        res.status(201).json(lugar);
    }catch(e){
        res.status(400).json({error: e.message});
    }
    
}

export const readLugar = async (req, res) => {
    try{
        const lugar = await readLugarService();
        res.status(200).json(lugar);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const updateLugar = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const lugar = await updateLugarService(id, req.body);
        res.status(200).json(lugar);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const deleteLugar = async (req, res) => {
    try{
        const id = Number(req.params.id);
        await deleteLugarService(id);
        res.status(200).json({message: "Lugar eliminado"});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}