import Prisma from"../prisma.js"

export const createRegistros =  (RegistrosData) => {
    return Prisma.Registros.create({Data: RegistrosData})

}

export const readRegistros = () => {
    return Prisma.Registros.findMany();

}
export const updateRegistros = (RegistrosId, RegistrosData) => {
    return Prisma.Registros.update({
        where: {id: RegistrosId}, 
        data: RegistrosData})

}
export const deleteRegistros = (RegistrosId) => { 
    return Prisma.Registros.delete({
        where: {id: RegistrosId}
    })

}