import { createCurso, deleteCurso, readCurso, updateCurso } from "../repository/curso.repository.js";

export const createCursoService = (userData) => {
    return createCurso(userData);
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