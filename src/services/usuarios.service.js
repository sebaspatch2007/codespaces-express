import { readusuarios } from "../repository/usuarios.repository.js";
import { createusuarios } from "../repository/usuarios.repository.js";
import { updateusuarios } from "../repository/usuarios.repository.js";
import { deleteusuarios } from "../repository/usuarios.repository.js";

export const createUsuariosService = (userData) => {
    return createUsuarios(userData);
}

export const readUsuariosService = () => {
    return readUsuarios();
}

export const updateUsuariosService = (userId, userData) => {
    return updateUsuarios(userId, userData);
}

export const deleteUsuariosService = (userId) => {
    return deleteUsuarios(userId);
}