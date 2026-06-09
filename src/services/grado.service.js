import { createGrupo, deleteGrupo, readGrupo, updateGrupo } from "../repository/grupo.repository.js";

export const createGradoService = (userData) => {
    return createGrupo(userData);
}

export const readGradoService = () => {
    return readGrupo();
}

export const updateGradoService = (userId, userData) => {
    return updateGrupo(userId, userData);
}

export const deleteGradoService = (userId) => {
    return deleteGrupo(userId);
}