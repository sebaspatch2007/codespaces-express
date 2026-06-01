import Prisma from"../prisma.js"

export const createRol =  (rolData) => {
    return Prisma.Rol.create({Data: rolData})

}

export const readRol = () => {
    return Prisma.Rol.findMany();

}
export const updateRol = (rolId, rolData) => {
    return Prisma.Rol.update({
        where: {id: rolId},
        data: rolData
    })
}
export const deleteRol = (rolId) => {
    return Prisma.Rol.delete({
        where: {id: rolId}
    })
}