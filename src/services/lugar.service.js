import { createLugar, deleteLugar, readLugar, updateLugar } from "../controllers/lugar.controller";

export const createLugarService = (userData) => {
    return createLugar(userData);
}

export const readLugarService = () => {
    return readLugar();
}

export const updateLugarService = (userId, userData) => {
    return updateLugar(userId, userData);
}

export const deleteLugarService = (userId) => {
    return deleteLugar(userId);
}