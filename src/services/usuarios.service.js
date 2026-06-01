import { readusuarios } from "../repository/usuarios.repository.js";
import { createusuarios } from "../repository/usuarios.repository.js";
import { updateusuarios } from "../repository/usuarios.repository.js";
import { deleteusuarios } from "../repository/usuarios.repository.js";

export const createusuariosService = (userData) => {
    return createusuarios(userData);
}

export const readusuariosService = () => {
    return readusuarios();
}

export const updateusuariosService = (userId, userData) => {
    return updateusuarios(userId, userData);
}

export const deleteusuariosService = (userId) => {
    return deleteusuarios(userId);
}