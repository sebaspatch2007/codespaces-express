import { createUsuariosService,deleteUsuariosService,readUsuariosService,updateUsuariosService,} from "../services/usuarios.service"


export const controllerfindUsuarios = async (req, res) => {
    try{
        const user = await readUsuariosService(req.body);
        res.status(201).json(user);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}
export  const createUsuarios = async (req, res) => {
    try{
        const user = await createUsuariosService(req.body);
        res.status(201).json(user);
    }catch(e){
        res.status(400).json({error: e.message});
    }

}
export const updateUsuarios = async (req, res) => {
    try{
        const user = await updateUsuariosService(req.body);
        res.status(200).json(user);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const deleteUsuarios = async (req, res) => {
    try{
        const id = Number(req.params.id);
        await deleteUsuariosService(id);
        res.status(200).json({message: "Usuario eliminado"});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}