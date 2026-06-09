import { createUser, deleteUser, readUser, updateUser } from "../repository/usuarios.repository.js";
export const createUsuariosService = (userData) => {
    return createUser(userData);
}

export const readUsuariosService = () => {
    return readUser();
}

export const updateUsuariosService = (userId, userData) => {
    return updateUser(userId, userData);
}

export const deleteUsuariosService = (userId) => {
    return deleteUser(userId);
}