import { createRegistrosService,deleteRegistrosService, readRegistrosService, updateRegistrosService } from "../services/registros.service"

export const readRegistros = async (req, res) => {
    try{
        const user = await readRegistrosService();
        res.status(200).json(user);
    }catch(e){
        res.status(400).json({error: e.message});
    }

}
export  const createRegistros = async (req, res) => {
    try{
        const registros = await createRegistrosService(req.body);
        res.status(201).json(registros);
    }catch(e){
        res.status(400).json({error: e.message});  
    }

}
export const updateRegistros = async (req, res) => {
    try{
        const id = Number (req.params.id);
        const registros = await updateRegistrosService(id, req.body);
        res.status(200).json(registros);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const deleteRegistros = async (req, res) => {
    try{
        const id = Number(req.params.id);
        await deleteRegistrosService(id);
        res.status(200).json({message: "Registro eliminado"});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}