import { createTipo_documento, deleteTipo_documento, readTipo_documento, updateTipo_documento } from "../repository/tipo_documento.repository";

export const createTipoDocumentoService = (userData) => {
    return createTipo_documento(userData);
}

export const readTipoDocumentoService = () => {
    return readTipo_documento();
}

export const updateTipoDocumentoService = (userId, userData) => {
    return updateTipo_documento(userId, userData);
}

export const deleteTipoDocumentoService = (userId) => {
    return deleteTipo_documento(userId);
}