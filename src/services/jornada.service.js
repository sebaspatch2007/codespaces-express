import { createJornada, deleteJornada, readJornada, updateJornada } from "../controllers/jornada.controller";

export const createJornadaService = (userData) => {
    return createJornada(userData);
}

export const readJornadaService = () => {
    return readJornada();
}

export const updateJornadaService = (userId, userData) => {
    return updateJornada(userId, userData);
}

export const deleteJornadaService = (userId) => {
    return deleteJornada(userId);
}