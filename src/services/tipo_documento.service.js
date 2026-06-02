import { createTipoDocumento, deleteTipoDocumento, readTipoDocumento, updateTipoDocumento } from "../controllers/tipo_documento.controller";

export const createTipoDocumentoService = (userData) => {
    return createTipoDocumento(userData);
}

export const readTipoDocumentoService = () => {
    return readTipoDocumento();
}

export const updateTipoDocumentoService = (userId, userData) => {
    return updateTipoDocumento(userId, userData);
}

export const deleteTipoDocumentoService = (userId) => {
    return deleteTipoDocumento(userId);
}