import { createRegistros, deleteRegistros, readRegistros, updateRegistros } from "../controllers/registros.controller";

export const createRegistrosService = (userData) => {
    return createRegistros(userData);
}

export const readRegistrosService = () => {
    return readRegistros();
}

export const updateRegistrosService = (userId, userData) => {
    return updateRegistros(userId, userData);
}

export const deleteRegistrosService = (userId) => {
    return deleteRegistros(userId);
}