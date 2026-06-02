import { createCurso, deleteCurso, readCurso, updateCurso } from "../controllers/curso.controller";

export const createCursoService = (userData) => {
    return createCurso
    (userData);
}

export const readCursoService = () => {
    return readCurso();
}

export const updateCursoService = (userId, userData) => {
    return updateCurso(userId, userData);
}

export const deleteCursoService = (userId) => {
    return deleteCurso(userId);
}