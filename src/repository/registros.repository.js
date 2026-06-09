import Prisma from"../prisma.js"

export const createRegistros =  (RegistrosData) => {
    return Prisma.registro.create({Data: RegistrosData})

}

export const readRegistros = () => {
    return Prisma.registro.findMany();

}
export const updateRegistros = (RegistrosId, RegistrosData) => {
    return Prisma.registro.update({
        where: {id: RegistrosId}, 
        data: RegistrosData})

}
export const deleteRegistros = (RegistrosId) => { 
    return Prisma.registro.delete({
        where: {id: RegistrosId}
    })

}