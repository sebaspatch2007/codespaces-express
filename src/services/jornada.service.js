import { createjornada, deletejornada, readjornada, updatejornada } from "../repository/jornada.repository.js";

export const createJornadaService = (userData) => {
    return createjornada(userData);
}

export const readJornadaService = () => {
    return readjornada();
}

export const updateJornadaService = (userId, userData) => {
    return updatejornada(userId, userData);
}

export const deleteJornadaService = (userId) => {
    return deletejornada(userId);
}