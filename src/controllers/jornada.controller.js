import { createJornadaService,deleteJornadaService,readJornadaService, updateJornadaService } from "../services/jornada.service"
export const createJornada = async (req, res) => {
    try{
        const jornada = await createJornadaService(req.body);
        res.status(201).json(jornada);
    }catch(e){
        res.status(400).json({error: e.message});
    }
    
}

export const readJornada = async (req, res) => {
    try{
        const Jornada = await readJornadaService();
        res.status(200).json(Jornada);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const updateJornada = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const Jornada = await updateJornadaService(id, req.body);
        res.status(200).json(Jornada);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const deleteJornada = async (req, res) => {
    try{
        const id = Number(req.params.id);
        await deleteJornadaService(id);
        res.status(200).json({message: "Jornada eliminada"});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}