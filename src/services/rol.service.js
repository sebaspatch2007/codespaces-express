import { createRol, deleteRol, readRol, updateRol } from "../controllers/rol.controller";

export const createRolService = (userData) => {
    return createRol(userData);
}

export const readRolService = () => {
    return readRol();
}

export const updateRolService = (userId, userData) => {
    return updateRol(userId, userData);
}

export const deleteRolService = (userId) => {
    return deleteRol(userId);
}