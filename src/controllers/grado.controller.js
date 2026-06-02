import { createGradoService, deleteGradoService,readGradoService, updateGradoService } from "../services/grado.service"
export const createGrado = async (req, res) => {
    try{
        const grado = await createGradoServices(req.body);
        res.status(201).json(grado);
    }catch(e){
        res.status(400).json({error: e.message});
    }
    
}

export const readGrado = async (req, res) => {
    try{
        const grados = await readGradoService();
        res.status(200).json(grados);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const updateGrado = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const grado = await updateGradoService(id, req.body);
        res.status(200).json(grado);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const deleteGrado = async (req, res) => {
    try{
        const id = Number(req.params.id);
        await deleteGradoService(id);
        res.status(200).json({message: "Grado eliminado"});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}