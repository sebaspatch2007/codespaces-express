import Prisma from"../prisma.js"

export const createGrupo =  (GrupoData) => {
    return Prisma.grupo.create({Data: GrupoData})

}

export const readGrupo = () => {
    return Prisma.grupo.findMany();

}
export const updateGrupo = (GrupoId, GrupoData) => {
    return Prisma.grupo.update({
        where: {id: GrupoId}, 
        data: GrupoData})

}
export const deleteGrupo = (GrupoId) => { 
    return Prisma.grupo.delete({
        where: {id: GrupoId}
    })

}