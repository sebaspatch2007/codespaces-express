import Prisma from"../prisma.js"

export const createGrupo =  (GrupoData) => {
    return Prisma.Grupo.create({Data: GrupoData})

}

export const readGrupo = () => {
    return Prisma.Grupo.findMany();

}
export const updateGrupo = (GrupoId, GrupoData) => {
    return Prisma.Grupo.update({
        where: {id: GrupoId}, 
        data: GrupoData})

}
export const deleteGrupo = (GrupoId) => { 
    return Prisma.Grupo.delete({
        where: {id: GrupoId}
    })

}