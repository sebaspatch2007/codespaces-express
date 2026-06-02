import { createGrado, deleteGrado, readGrado, updateGrado } from "../controllers/grado.controller";

export const createGradoService = (userData) => {
    return createGrado(userData);
}

export const readGradoService = () => {
    return readGrado();
}

export const updateGradoService = (userId, userData) => {
    return updateGrado(userId, userData);
}

export const deleteGradoService = (userId) => {
    return deleteGrado(userId);
}