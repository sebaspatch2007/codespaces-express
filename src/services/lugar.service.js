import { createlugar, deletelugar, readlugar, updatelugar } from "../repository/lugar.repository.js";

export const createLugarService = (userData) => {
    return createlugar(userData);
}

export const readLugarService = () => {
    return readlugar();
}

export const updateLugarService = (userId, userData) => {
    return updatelugar(userId, userData);
}

export const deleteLugarService = (userId) => {
    return deletelugar(userId);
}