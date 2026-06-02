import { createTipoDocumentoService, deleteTipoDocumentoService,readTipoDocumentoService,updateTipoDocumentoService } from "../services/tipo_documento.service"
export const createTipoDocumento = async (req, res) =>  {
    try{
        const user = await createTipoDocumentoService(req.body);
        res.status(201).json(user);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}   

export const readTipoDocumento = async () => {
    try { 
        const user = await readTipoDocumentoService();
        res.status(200).json(user);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const updateTipoDocumento = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const TipoDocumento = await updateTipoDocumentoService(id, req.body);
        res.status(200).json(TipoDocumento);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const deleteTipoDocumento = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const TipoDocumento = await deleteTipoDocumentoService(id);
        res.status(200).json({message: "Tipo de documento eliminado"});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}