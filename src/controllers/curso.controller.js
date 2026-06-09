import { createCursoService,deleteCursoService,readCursoService,updateCursoService } from "../services/curso.service.js"
export const createCurso = async (req, res) => {
    try{
        const curso = await createCursoService(req.body);
        res.status(201).json(curso);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const readCurso = async (req, res) => {
    try{
        const cursos = await readCursoService();
        res.status(200).json(cursos);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const updateCurso = async (req, res) => {
    try{
        const id = Number(req.params.id);
        const curso = await updateCursoService(id, req.body);
        res.status(200).json(curso);
    }catch(e){
        res.status(400).json({error: e.message});
    }
}

export const deleteCurso = async (req, res) => {
    try{
        const id = Number(req.params.id);
        await deleteCursoService(id);
        res.status(200).json({message: "Curso eliminado"});
    }catch(e){
        res.status(400).json({error: e.message});
    }
}